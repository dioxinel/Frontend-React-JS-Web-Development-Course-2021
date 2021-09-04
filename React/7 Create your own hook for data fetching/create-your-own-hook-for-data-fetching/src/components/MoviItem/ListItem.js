import React, { useContext } from "react";
import { ThemeContext } from "../List";
import { Image } from "./Image";
import { Overview } from "./Overview";
import { RateSwitch } from "./RateSwitch";
import '../../index.css'
import { ShowReleaseDate } from "./ShowReleaseDate";

export const ListItem = ({item, handleShow}) => {
  const theme = useContext(ThemeContext)
  return (
    <div className="ListItem">
      <div className={theme ? 'title-lt' : 'title-dt'}>{item.title}</div>
      <Image url={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
      <RateSwitch data={item.popularity} />
      <ShowReleaseDate data={item.release_date} handleShow={handleShow}/>
      <Overview data={item.overview} />
    </div>
  )
}