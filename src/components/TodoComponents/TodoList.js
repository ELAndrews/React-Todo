// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import ToDoForm from "./TodoForm";

export default class ToDoList extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <ToDoForm
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
          onClear={this.props.onClear}
        />
        {this.props.state.toDoArray.map((curr, index) => {
          return (
            <div key={index}>
              <Todo curr={curr} />
            </div>
          );
        })}
      </div>
    );
  }
}
