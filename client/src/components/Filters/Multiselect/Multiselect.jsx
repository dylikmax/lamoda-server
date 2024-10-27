import React from "react";
import "./Multiselect.css";
import CheckboxFilter from "./CheckboxFilter/CheckboxFilter";

function Multiselect(props) {
  const { mulselect, onChange: handleSetMultiselect, iteration } = props;

  return (
    <div className="filters__multiselect">
      <span className="select-name">By {mulselect.key}</span>
      {mulselect.filters.map((filter, i) => (
        <CheckboxFilter
          filter={filter}
          isChecked={mulselect.active.some(
            (activeFilter) => activeFilter.id === filter.id
          )}
          onCheck={handleSetMultiselect}
          iteration={iteration}
          key={filter.id}
        ></CheckboxFilter>
      ))}
    </div>
  );
}

export default React.memo(Multiselect);
