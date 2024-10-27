const { isInRange, limitsByKey, activeFlags } = require("./helpers/helpers.js")

const filterFuncs = [
  (product, activeFilters) =>
    product.name.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
    product.description
      .toLowerCase()
      .includes(activeFilters.search.toLowerCase()),
  (product, activeFilters) =>
    activeFilters.multifilters.every((multifilter) =>
      multifilter.active.includes(
        multifilter.filters.find(
          (filter) => filter.id === product[multifilter.key].toLowerCase()
        )
      )
    ),
  (product, activeFilters) =>
    activeFilters.rangeFilters.every((rangeFilter) =>
      rangeFilter.values
        ? isInRange(product[rangeFilter.key], rangeFilter.values)
        : true
    ),
];

const filterFn = (product, activeFilters) => {
  return filterFuncs.every((filterFunc) => filterFunc(product, activeFilters));
};

function setFilters(arr, search, rangeFilters, multifilters) {
  return {
    search: search,
    rangeFilters: setRangeFilters(arr, rangeFilters),
    multifilters: setMultifilters(multifilters),
  };
}

function setRangeFilters(arr, rangeFilters) {
  return rangeFilters.map((filter) => ({
    key: filter.key,
    values: filter.range,
    limits: limitsByKey(arr, filter.key),
  }));
}

function setMultifilters(multifilters) {
  return multifilters.map((filter) => ({
    key: filter.key,
    filters: filter.allFlags,
    active: activeFlags(filter.allFlags, filter.currFlagsIds),
  }));
}

module.exports = { filterFn, setFilters, setRangeFilters, setMultifilters };
