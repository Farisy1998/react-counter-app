import React, { Component } from "react";

class Counter extends Component {
  componentWillUnmount() {
    console.log("Counter - unmounted");
  }
  render() {
    console.log("Counter - renderd");
    const { counter, onDelete, onIncrement, onDecrement } = this.props;
    return (
      // The below JSX expression will copiled to the plane  JavaScript
      // code and this plain JavaScript code will then execute by the
      // browser's JavaScript engine
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={counter.value === 0 && "true"}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm"
            >
              X
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

  formatCount() {
    const { value } = this.props.counter; // Object destructing
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
