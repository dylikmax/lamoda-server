export const fetchProducts = async (
  sorts,
  multiselects,
  ranges,
  userSearch,
  URL,
  setProducts,
  setError,
  setLoading
) => {
  setLoading(true);
  setError(null);

  try {
    const sortId = sorts.find((sort) => sort.active)
      ? sorts.find((sort) => sort.active).id
      : undefined;

    const colors = parseMultiselects(multiselects, "color");
    const categories = parseMultiselects(multiselects, "category");

    const priceValue = parseRanges(ranges, "price");

    const params = {
        q: userSearch,
        price: priceValue,
        sort: sortId,
        colors: colors,
        categories: categories,
    };

    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== undefined)
    );
    
    const query = new URLSearchParams(filteredParams).toString();
    
    const response = await fetch(`${URL}products/?${query}`);
    if (!response.ok) {
      throw new Error(`Error to fetch.`);
    }

    const fetchedProducts = await response.json();
    setProducts(fetchedProducts);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

function parseMultiselects(multiselects, key) {
  return multiselects.find((multisel) => multisel.key === key)
    ? multiselects
        .find((multisel) => multisel.key === key)
        .active.map((filter) => filter.id)
    : undefined;
}

function parseRanges(ranges, key) {
  return ranges.find((range) => range.key === key)
    ? ranges.find((range) => range.key === key).values
    : undefined;
}
