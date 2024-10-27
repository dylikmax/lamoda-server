import "./App.css";
import { useState, useEffect } from "react";
import SortSelection from "./SortSelection/SortSelection";
import Search from "./Search/Search";
import Filters from "./Filters/Filters";
import ProductContainer from "./ProductContainer/ProductContainer";
import { fetchStartData } from "../data/start-data";
import { fetchProducts } from "../data/fetch-products";
const URL = "http://localhost:8080/";

export default function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [sorts, setSorts] = useState([]);

  const [userSearch, setSearch] = useState("");
  const [multiselects, setMultiselects] = useState([]);
  const [ranges, setRanges] = useState([]);

  const dataToFetch = ["sorts", "multiselects", "ranges"];
  const setFns = [setSorts, setMultiselects, setRanges];

  useEffect(() => {
    fetchStartData(dataToFetch, setFns, URL, setError, setLoading);
  }, []);

  useEffect(() => {
    fetchProducts(sorts, multiselects, ranges, userSearch, URL, setProducts, setError, setProductsLoading);
  }, [sorts, multiselects, ranges, userSearch]);

  const [count, setCount] = useState(products.length);
  
  useEffect(() => {
    setCount(products.length);
  }, [products]);

  const handleSetSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeSort = (e, sortId) => {
    if (!e.target.checked) {
      return;
    }

    setSorts(sorts.map((sort) => ({ ...sort, active: sortId === sort.id })));
  };

  const handleSetMultiselect = (e, i, filter) => {
    const checked = e.target.checked;

    setMultiselects((prevMultiselects) => {
      return prevMultiselects.map((multiselect, index) => {

        if (index === i) {
          const updatedActive = checked
            ? [...multiselect.active, filter]
            : multiselect.active.filter(
                (activeFilter) => activeFilter.id !== filter.id
              );

          return {
            ...multiselect,
            active: updatedActive,
          };
        }
        return multiselect;
      });
    });
  };

  const handleSetRanges = (e, key, type) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      const newValue = inputValue !== "" ? parseInt(inputValue) : 0;

      setRanges((prevRange) => {
        return prevRange.map((rangeItem) => {
          if (rangeItem.key === key) {
            const updatedValues = [...rangeItem.values];
            type === "from"
              ? (updatedValues[0] = newValue)
              : (updatedValues[1] = newValue);

            return {
              ...rangeItem,
              values: updatedValues,
            };
          }
          return rangeItem;
        });
      });
    }
  };

  if (loading) return <p className="load-message">Loading...</p>
  if (error) return <p className="error-message">Error: check your internet connection</p>

  return (
    <div className="container">
      <Search userSearch={userSearch} onChange={handleSetSearch}></Search>
      <SortSelection sorts={sorts} onChange={handleChangeSort}></SortSelection>
      <div className="filters-prods">
        <Filters
          multiselects={multiselects}
          ranges={ranges}
          onMulselectChange={handleSetMultiselect}
          onRangeChange={handleSetRanges}
          count={count}
        ></Filters>
        <ProductContainer products={products} count={count} loading={productsLoading}></ProductContainer>
      </div>
    </div>
  );
}
