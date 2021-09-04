import React, { useState } from "react";
import { ListItem } from "./MoviItem/ListItem";
import '../index.css'
import { Pagination } from "./Paination/Pagination";
import { Header } from "./Header";
import { ThemeButton } from "./ThemeButton";
import { PopUp } from "./PopUp";
import { useFetchMovies } from "../useFetchMovies";


export const ThemeContext = React.createContext(true);
const ThemeContextProvider = ThemeContext.Provider;

export const List = () => {
  const [page, setPage] = useState(1)
  const [lightTheme, setLightTheme] = useState(true);
  const [release, setRelease] = useState(null);
  
  const baseUrl = 'https://api.themoviedb.org/3/';
  const _APIKEY = '21f53b102f9fcc68f706abfc92770539';
  const url = `${baseUrl}movie/popular?api_key=${_APIKEY}&language=us-EN&page=${page}`
  const { movieList, currentPage, totalPages } = useFetchMovies(url)

  function handleChangeTheme() {
    setLightTheme(!lightTheme)
  }

  function handleShow(data=null) {
    setRelease(data)
  }

  function handleClosePopUp() {
    setRelease(null)
  }
  return (
    <ThemeContextProvider value={lightTheme} >
      <div className={lightTheme ? 'List-lt':'List-dt'}>
        <ThemeButton lightTheme={lightTheme} changeTheme={handleChangeTheme}/>
        <Header />
        {release ? 
        <PopUp 
        handleClosePopUp={handleClosePopUp} 
        data={release}/>: null}
        {movieList.map(item => {
          return <ListItem item={item} key={item.id} handleShow={handleShow}/>
        })}
        <Pagination 
        currentPage={currentPage}
        setCurrentPage={setPage}
        totalPages={totalPages}/>
      </div>
    </ThemeContextProvider>   
    );
}



