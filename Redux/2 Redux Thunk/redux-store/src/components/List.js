import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchFilms, loadingSelector, themeSelector } from "../store";
import { ListItem } from "./MoviItem/ListItem";
import '../index.css'
import { Pagination } from "./Paination/Pagination";
import { Header } from "./Header";
import { ThemeButton } from "./ThemeButton";
import { PopUp } from "./PopUp";
import { useFetchMovies } from "../useFetchMovies";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const List = ({link, fetchFilms, list}) => {
  const [page, setPage] = useState(1)
  const [release, setRelease] = useState(null);
  
  const theme = useSelector (themeSelector)
  const loading = useSelector (loadingSelector)
  const url = link + page;

  const { currentPage, totalPages } = useFetchMovies(url)

  useEffect(() => {
    fetchFilms(url)
  }, [url, fetchFilms])

  function handleShow(data=null) {
    setRelease(data)
  }

  function handleClosePopUp() {
    setRelease(null)
  }
  return (
    <div className={theme ? 'List-lt':'List-dt'}>
        <ThemeButton />
        <Header />
        {release ? 
        <PopUp 
        handleClosePopUp={handleClosePopUp} 
        data={release}/>: null}
        {!loading ? list.map(item => {
          return <ListItem item={item} key={item.id} handleShow={handleShow}/>
        }) : <ClipLoader color={'red'} loading={loading} size={150} />}
        <Pagination 
        currentPage={currentPage}
        setCurrentPage={setPage}
        totalPages={totalPages}/>
    </div>

    );
}

const mapDispatch = (dispatch) => {
  return {
    addFilmList: (list) => {dispatch({type: 'filmList/add', payload: list})},
    fetchFilms: (url) => {dispatch(fetchFilms(url))}
  }
};
const mapStateToProps = (state) => ({
  list: state.filmList
})

export default connect(mapStateToProps, mapDispatch)(List);

