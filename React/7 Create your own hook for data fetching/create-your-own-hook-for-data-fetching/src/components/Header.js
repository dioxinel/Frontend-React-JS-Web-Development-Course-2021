import React, { useContext } from "react";
import { ThemeContext} from "./List";
import '../index.css'

export const Header = () => {
  const theme = useContext(ThemeContext)
  return (
    <h1 className={theme ? 'title-lt':'title-dt'}>{"Favourite Movies"}</h1>  
    )
}