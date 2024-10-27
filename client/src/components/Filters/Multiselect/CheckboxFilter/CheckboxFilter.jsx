import React from "react";
import "./CheckboxFilter.css";

function CheckboxFilter(props) {
  const { filter, isChecked, onCheck: handleSetMultiselect, iteration } = props;

  return (
    <div className="checkbox-filter">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleSetMultiselect(e, iteration, filter)}
      />
      <p>{filter.name}</p>
    </div>
  );
}

export default React.memo(CheckboxFilter);
