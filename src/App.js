import React from "react";
import Todo from "./components/TodoComponents/Todo";
import ToDoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      toDoArray: [
        {
          task: "",
          id: Date.now(),
          completed: false
        }
      ],
      formValues: {
        task: "",
        id: Date.now(),
        completed: false
      }
    };
  }

  onSubmit = e => {};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <ToDoForm />
        <Todo /> */}
      </div>
    );
  }
}

export default App;
