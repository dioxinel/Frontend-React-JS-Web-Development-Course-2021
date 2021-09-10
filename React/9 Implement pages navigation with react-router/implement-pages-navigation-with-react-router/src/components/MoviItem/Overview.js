import React, { useContext } from "react";
import { ThemeContext } from "../List";


export const Overview = ({data}) => {
  const theme = useContext(ThemeContext)
  return (
    <p 
    className={theme ? 'overview-lt' : 'overview-dt' }>
    {data ? data : "This film doesn't have overview"}</p>   
    );
}
