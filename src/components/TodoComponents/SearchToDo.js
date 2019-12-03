import React from "react";
import Todo from "./Todo";
import "./Todo.css";

export default class SearchToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFormValues: {
        task: ""
      }
    };
  }

  onSearchChange = e => {
    this.setState({
      searchFormValues: {
        ...this.state.searchFormValues,
        task: e.target.value
      }
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Search:
            <input type="text" name="search" onChange={this.onSearchChange} />
          </label>
        </form>
        {this.state.searchFormValues.task.length === 0 ? (
          <div></div>
        ) : (
          this.state.searchFormValues &&
          this.props.state.toDoArray
            .filter(curr => {
              return curr.task
                .toLowerCase()
                .includes(this.state.searchFormValues.task.toLowerCase());
            })
            .map((curr, index) => {
              return (
                <div key={index} className="searched">
                  <Todo
                    curr={curr}
                    key={curr.id}
                    complete={curr.completed}
                    onComplete={this.props.onComplete}
                  />
                </div>
              );
            })
        )}
      </div>
    );
  }
}
