import React from "react";
import { ThemeContextConsumer } from "../List";
import '../../index.css'

export class ShowReleaseDate extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {theme => {
          return (
            <div>
              <button onClick={() => this.props.handleShow(this.props.data)}>{'Show Release Date'}</button>
            </div>
          )
        }}
      </ThemeContextConsumer>
      
    );
  }
}