import React from "react";
import "./RangeFilter.css";
import InputFilter from "./InputFilter/InputFilter";

function RangeFilter(props) {
  const { range, onChange: handleSetRanges } = props;

  return (
    <div className="filters__rangefilter">
      <span className="select-name">By {range.key}</span>
      <InputFilter
      onChange={handleSetRanges}
      range={range}
      key={range.key}
      ></InputFilter>
    </div>
  );
}

export default React.memo(RangeFilter);
