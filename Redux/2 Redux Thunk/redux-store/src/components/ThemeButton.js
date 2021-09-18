import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, themeSelector } from "../store/index";
import '../index.css'
import Icon from "./Icon";


export const ThemeButton = () => {
  const theme = useSelector(themeSelector)
  const dispatch = useDispatch()
  const handleChangeFilm = () => {
    dispatch(changeTheme(!theme))
  }

    return (
      <div className={'theme'} onClick={handleChangeFilm}>
        {theme ?
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


