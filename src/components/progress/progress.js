import React, { Component } from "react";
import "./progress.css";

class Progress extends Component {
  state = {};
  render() {
    const { toDo, done, items } = this.props;
    return (
      <div className="shouProgress">
        <span>Active</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-info"
            role="progressbar"
            style={{
              width: `${
                items.length ? ((items.length - done) / items.length) * 100 : 0
              }%`
            }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <span>Done</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
            role="progressbar"
            style={{
              width: `${((items.length - toDo) / items.length) * 100}%`
            }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    );
  }
}

export default Progress;
