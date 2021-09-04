import React from "react";
import { ThemeContextConsumer } from "./List";


export class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {theme => {
          const className = `${this.props.className} ${theme ? 'light' : 'dark'}`
          return (
              <button {...this.props} className={className}>{this.props.text}</button>
          )
        }}
      </ThemeContextConsumer>
    );
  }
}