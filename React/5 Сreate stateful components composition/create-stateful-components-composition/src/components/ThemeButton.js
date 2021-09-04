import React from "react";
import '../index.css'
import Icon from "./Icon";


export class ThemeButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeTheme = this.handleChangeTheme.bind(this)
  }

  handleChangeTheme() {
    this.props.changeTheme()
  }

  render() {
    return (
      <div className={'theme'} onClick={this.handleChangeTheme}>
        {this.props.lightTheme ?
          <Icon 
          name={'sun'} 
          width="40px" 
          height="40px"/> : 
          <Icon 
          name={'moon'} 
          height={'30px'} 
          width={'30px'}/>}  
      </div>
    );
  }
}


