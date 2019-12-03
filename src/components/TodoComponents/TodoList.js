// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import ToDoForm from "./TodoForm";
import SearchToDo from "./SearchToDo";

export default class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ToDoForm
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
          onClear={this.props.onClear}
        />
        <SearchToDo
          state={this.props.state}
          onComplete={this.props.onComplete}
        />
        {this.props.state.toDoArray.map((curr, index) => {
          return (
            <div key={index}>
              <Todo
                curr={curr}
                key={curr.id}
                complete={curr.completed}
                onComplete={this.props.onComplete}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
