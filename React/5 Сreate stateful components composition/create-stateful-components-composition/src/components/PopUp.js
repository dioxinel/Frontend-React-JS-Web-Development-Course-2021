import React from "react";
import { ThemeContextConsumer } from "./List";
import '../index.css'

export class PopUp extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {theme => {
          return (
            <div className={`popUp ${theme ? 'light' : 'dark'}`}>
              {this.props.data}
              <div onClick={this.props.handleClosePopUp}>x</div>    
            </div>
          )
        }}
      </ThemeContextConsumer>
      
    );
  }
}