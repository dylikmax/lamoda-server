import React from "react";
import "./SortSelection.css";
import Sort from "./Sort/Sort";

function SortSelection(props) {
    const {sorts, onChange: handleChangeSort} = props;
    
    return <div className="sorts mt20">
    {sorts.map(sort => <Sort
    sort={sort}
    onChange={handleChangeSort}
    key={sort.id}
    ></Sort>)}
  </div>
}

export default React.memo(SortSelection)