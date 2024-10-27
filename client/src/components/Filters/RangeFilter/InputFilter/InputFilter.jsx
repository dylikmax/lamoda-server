import React from "react";
import "./InputFilter.css";

function InputFilter(props) {
  const { onChange: handleSetRanges, range } = props;

  return (
    <div className="input-filter">
      <div className="df">
        <span>from</span>
        <input
          type="text"
          className="range-input"
          value={range.values[0]}
          onChange={(e) => handleSetRanges(e, range.key, "from")}
        />
      </div>
      <div className="df">
        <span>to</span>
        <input
          type="text"
          className="range-input"
          value={range.values[1]}
          onChange={(e) => handleSetRanges(e, range.key, "to")}
        />
      </div>
    </div>
  );
}

export default React.memo(InputFilter);
