import React, { Component } from "react";
import "./styles.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "Manu", age: 28 },
      { name: "Aman", age: 26 }
    ],
    otherState: "some value"
  };
  switchNameHandler = () => {
    // console.log("Clicked!");
    //will not work this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: "Maximillian", age: 29 },
        { name: "Manu", age: 28 },
        { name: "Aman", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Hobbies: Racing
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "does this work?")
    // );
  }
}

export default App;
