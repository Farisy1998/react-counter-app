import React, { Component } from "react";

// controlled component -> component which doesn't have a state.
class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete, onDecrement } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1 m-2">
            <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onIncrement(counter)}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => onDecrement(counter)}
              disabled={counter.value == 0 && true}
            >
              -
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(counter.id)}
            >
              x
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
