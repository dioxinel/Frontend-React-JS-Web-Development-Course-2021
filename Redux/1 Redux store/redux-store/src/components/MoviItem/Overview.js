import React from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../../store";


export const Overview = ({data}) => {
  const theme = useSelector(themeSelector)
  return (
    <p 
    className={theme ? 'overview-lt' : 'overview-dt' }>
    {data ? data : "This film doesn't have overview"}</p>   
    );
}
