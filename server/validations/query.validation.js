const { query } = require("express-validator");
const COLORS = require("../constants/filters.js")
const SORTS = require("../constants/sorts.js")
const CATEGORIES = require("../constants/categories.js")
const ALLOWED_QUERY_PARAMS = require('../constants/params.js');
const { checkFromAllowed } = require('../helpers/helpers.js')

const sortIds = SORTS.map(sort => sort.id);

const invalidParamsValidation = (req, res, next) => {
  const invalidParams = Object.keys(req.query).filter(
    (param) => !ALLOWED_QUERY_PARAMS.includes(param)
  );
  if (invalidParams.length > 0) {
    return res
      .status(400)
      .json({
        errors: `Invalid query parameters: ${invalidParams.join(", ")}`,
      });
  }
  next();
};

const validations = [
  query("q").optional(),
  query("colors")
    .optional()
    .custom((value) => checkFromAllowed(value, COLORS, 'colors')),
  query("price")
    .optional()
    .custom((value) => {
      const regex = /^(\d+)(,\d+)*$/;
      if (!regex.test(value) || value.split(",").length !== 2) {
        throw new Error("Invalid format for price range.");
      }
      return true;
    }),
  query("sort")
    .optional()
    .custom((value) => {
      if (!value) {
        return true;
      }

      if (!sortIds.includes(value)) {
        throw new Error(`Invalid sort.`);
      }
      return true;
    }),
    query("categories").optional((value) => checkFromAllowed(value, CATEGORIES, 'categories')),
  invalidParamsValidation,
];

module.exports = validations;