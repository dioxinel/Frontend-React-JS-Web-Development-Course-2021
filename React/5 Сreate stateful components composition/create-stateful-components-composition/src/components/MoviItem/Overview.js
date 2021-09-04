import React from "react";
import { ThemeContextConsumer } from "../List";


export class Overview extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {theme => {
          return (
            <p className={theme ? 'overview-lt' : 'overview-dt' }>{this.props.data ? this.props.data : "This film doesn't have overview"}</p>
          )
        }}
      </ThemeContextConsumer>
      
    );
  }
}