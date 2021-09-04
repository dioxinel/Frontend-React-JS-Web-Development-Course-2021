import React from "react";
import '../index.css'
import Icon from "./Icon";


export const ThemeButton = ({changeTheme, lightTheme}) => {
    return (
      <div className={'theme'} onClick={changeTheme}>
        {lightTheme ?
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


