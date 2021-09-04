import React, { useEffect, useState } from "react";
import Api from "../Api";
import { ListItem } from "./MoviItem/ListItem";
import '../index.css'
import { Pagination } from "./Paination/Pagination";
import { Header } from "./Header";
import { ThemeButton } from "./ThemeButton";
import { PopUp } from "./PopUp";


export const ThemeContext = React.createContext(true);
const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

export const List = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lightTheme, setLightTheme] = useState(true);
  const [release, setRelease] = useState(null);
  
  useEffect(() => {
    async function fetch() {
      const data = await fetchAndSaveData(1)
      setTotalPages(data.total_pages)
    }
    fetch()
    return
  }, [])
  
  async function fetchAndSaveData(pageNum) {
    const data = await  Api.fetchPopularMovies(pageNum)
    setMovieList([...data.results])
    return data
  }

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
        setCurrentPage={setCurrentPage}
        fetchAndSaveData={fetchAndSaveData}
        totalPages={totalPages}/>
      </div>
    </ThemeContextProvider>   
    );
}



