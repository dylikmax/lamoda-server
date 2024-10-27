const products = require("../utils/generate-products.js");
COLORS = [...new Set(products.map((product) => product.color))];

module.exports = COLORS;