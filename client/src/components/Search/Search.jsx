import React from "react";
import "./Search.css";

function Search(props) {
  const { userSearch, onChange: handleSetSearch } = props;
  return (
    <input
      type="text"
      className="search"
      value={userSearch}
      onChange={handleSetSearch}
    />
  );
}

export default React.memo(Search);
