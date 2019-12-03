import React from "react";

export default class ToDoForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Task
            <input
              type="text"
              name="task"
              onChange={this.props.onChange}
              placeholder="...new task"
              value={this.props.state.formValues.task}
            />
          </label>
          <button type="submit" onClick={this.props.onSubmit}>
            Add Task
          </button>
          <button type="submit" onClick={this.props.onClear}>
            Clear Completed Tasks
          </button>
        </form>
      </div>
    );
  }
}
