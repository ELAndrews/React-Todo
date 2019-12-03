import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <ul
        style={
          this.props.curr.completed === true
            ? { textDecoration: "line-through" }
            : null
        }
      >
        <li
          onClick={e => {
            this.props.onComplete(this.props.curr);
          }}
        >
          {this.props.curr.task}
        </li>
      </ul>
    );
  }
}
