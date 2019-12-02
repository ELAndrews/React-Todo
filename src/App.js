import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      toDoArray: [
        {
          task: "This is a task.",
          id: Date.now(),
          completed: false
        },
        {
          task: "This is the second task.",
          id: Date.now(),
          completed: true
        }
      ],
      formValues: {
        task: "",
        id: Date.now(),
        completed: false
      }
    };
  }

  onChange = e => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        task: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(state => {
      const toDoArray = state.toDoArray.push(state.formValues);

      return toDoArray;
    });
  };

  onClear = e => {
    e.preventDefault();
    const newArray = this.state.toDoArray.filter(
      curr => curr.completed === false
    );
    this.setState({
      toDoArray: newArray
    });
  };

  onComplete = e => {};

  render() {
    console.log(`formValues: `, this.state.formValues);
    console.log(`toDoArray: `, this.state.toDoArray);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onClear={this.onClear}
          onComplete={this.onComplete}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
