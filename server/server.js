const express = require("express");
const cors = require("cors");
const { validationResult } = require("express-validator");
const products = require("./utils/generate-products.js");
const validations = require("./validations/query.validation.js");
const {
  filterFn,
  setFilters,
  setRangeFilters,
  setMultifilters,
} = require("./filters.js");
const SORTS = require("./constants/sorts.js");
const COLORS = require("./constants/filters.js");
const CATEGORIES = require("./constants/categories.js");
const { limitsByKey, currentFlags } = require("./helpers/helpers.js");
const { multifilterParser, rangeParser } = require("./helpers/parsers.js")

const app = express();
app.use(cors());

app.get("/products", validations, (req, res) => {
  const colors = currentFlags(COLORS);
  const categories = currentFlags(CATEGORIES);

  const price = rangeParser(req.query.price)

  const queryColorIds = multifilterParser(req.query.colors, colors)
  const categoriesIds = multifilterParser(req.query.categories, categories);

  const search = req.query.q ? req.query.q : "";
  const sortId = req.query.sort ? req.query.sort : "popularFirst";

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const activeFilters = setFilters(
    products,
    search,
    [{ key: "price", range: price }],
    [
      { key: "color", allFlags: colors, currFlagsIds: queryColorIds },
      { key: "category", allFlags: categories, currFlagsIds: categoriesIds },
    ]
  );

  const finalProducts = products
    .filter((product) => filterFn(product, activeFilters))
    .sort((pr1, pr2) => SORTS.find((sort) => sort.id === sortId).fn(pr1, pr2));

  return res.status(200).json(finalProducts);
});

app.get("/sorts", (req, res) => {
  return res
    .status(200)
    .json(SORTS.map((sort) => ({ ...sort, fn: undefined })));
});

app.get("/multiselects", (req, res) => {
  const colors = currentFlags(COLORS);
  const categories = currentFlags(CATEGORIES)
  const filters = setMultifilters([
    {
      key: "color",
      allFlags: colors,
      currFlagsIds: colors.map((color) => color.id),
    },
    {
      key: "category",
      allFlags: categories,
      currFlagsIds: categories.map((categ) => categ.id),
    },
  ]);

  return res.status(200).json(filters);
});

app.get("/ranges", (req, res) => {
  const filters = setRangeFilters(products, [
    {
      key: "price",
      range: limitsByKey(products, "price"),
    },
  ]);

  return res.status(200).json(filters);
});

app.listen(8080, () => {});
