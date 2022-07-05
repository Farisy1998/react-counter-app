import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  //**************Component life cycle methods or hooks**************
  // constructor(){} - called when a component get created
  // render(){} - called when a component get renderd to the DOM
  // componentDidMount(){} - called after rendering the component to the DOM
  // componentDidUpdate(){} - called when a state get changed or comopnent
  //                          get updated
  // componentWillUnmount(){} - called before a componet get unmount or delete

  constructor() {
    super();
    console.log("App - constructed");
  }

  componentDidMount() {
    console.log("App - mounted");
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  componentDidUpdate() {
    console.log("Counter get updated or a state change occured");
  }
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
