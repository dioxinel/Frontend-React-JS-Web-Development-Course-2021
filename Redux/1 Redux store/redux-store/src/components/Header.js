import React from "react";
import { useSelector } from "react-redux";

import '../index.css'
import { themeSelector } from "../store";

export const Header = () => {
  const theme = useSelector (themeSelector)
  return (
    <h1 className={theme ? 'title-lt':'title-dt'}>{"Favourite Movies"}</h1>  
    )
}