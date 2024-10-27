import React from "react";
import "./Filters.css";
import Multiselect from "./Multiselect/Multiselect";
import RangeFilter from "./RangeFilter/RangeFilter";

function Filters(props) {
  const {
    multiselects,
    ranges,
    onMulselectChange: handleSetMultiselect,
    onRangeChange: handleSetRanges,
    count,
  } = props;

  return (
    <div className="filters">
      {multiselects.map((mulselect,i) => (
        <Multiselect
        mulselect={mulselect}
        onChange={handleSetMultiselect}
        iteration={i}
        key={i}
        ></Multiselect>
      ))}
      {ranges.map((range, i) => (
        <RangeFilter
        range={range}
        onChange={handleSetRanges}
        iteration={i}
        key={i}
        ></RangeFilter>
      ))}
      <p className="mt20">Products: {count}</p>
    </div>
  );
}

export default React.memo(Filters);
