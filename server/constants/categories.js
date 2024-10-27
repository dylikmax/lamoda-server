const products = require("../utils/generate-products.js");
CATEGORIES = [...new Set(products.map((product) => product.category))];

module.exports = CATEGORIES;