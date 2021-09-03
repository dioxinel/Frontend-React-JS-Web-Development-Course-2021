import React from "react";

export class Button extends React.Component {
 
  render() {
    const { text, handler, className, disabled = false } = this.props;
    return (
      <button onClick={handler} className={className} disabled={disabled}>{text}</button>
    );
  }
}