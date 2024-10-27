import React from "react";
import "./Sort.css";

function Sort(props) {
    const {sort, onChange: handleChangeSort} = props;
    return <div className="sort">
    <input
      type="checkbox"
      checked={sort.active}
      onChange={(e) => handleChangeSort(e, sort.id)}
    />
    <p>{sort.name}</p>
  </div>
}

export default React.memo(Sort)