import React, { Component } from "react";
import Counter from "./counter";

// controlled component
const Counters = ({
  onReset,
  counters,
  onIncrement,
  onDelete,
  onDecrement,
}) => {
  return (
    <div className="container">
      <button className="btn btn-primary btn-sm mt-3 mb-3" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
