import React from "react";
import Todo from "./Todo";
import "./Todo.css";

export default class SearchToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFormValues: {
        task: ""
      },
      searchArray: []
    };
  }

  onSearchChange = e => {
    // const { name, value } = e.target;
    this.setState({
      searchFormValues: {
        ...this.state.searchFormValues,
        task: e.target.value
      }
    });
    console.log(e.target.value);
  };

  onSearchSubmit = e => {
    e.preventDefault();
    // const searchArr =
    //   this.state.searchFormValues.task &&
    //   this.props.state.toDoArray.filter(curr => {
    //     return curr.task.includes(this.state.searchFormValues.task);
    //   });
    // this.setState({
    //   searchArray: searchArr
    // });
    // console.log(searchArr);
    // console.log(this.props.state.toDoArray);
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" name="search" onChange={this.onSearchChange} />
          <button type="submit" onClick={this.onSearchSubmit}>
            Search
          </button>
        </form>
        {this.state.searchFormValues &&
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
            })}
      </div>
    );
  }
}
