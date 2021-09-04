import React from "react";
import { ThemeContextConsumer } from "./List";
import '../index.css'

export class Header extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {theme => {
          return (
            <h1 className={theme ? 'title-lt':'title-dt'}>{"Favourite Movies"}</h1>
          )
        }}
      </ThemeContextConsumer>
      
    );
  }
}