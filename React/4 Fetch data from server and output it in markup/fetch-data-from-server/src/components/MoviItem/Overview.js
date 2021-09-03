import React from "react";


export class Overview extends React.Component {
  render() {
    return (
      <p>{this.props.data ? this.props.data : "This film doesn't have overview"}</p>
    );
  }
}