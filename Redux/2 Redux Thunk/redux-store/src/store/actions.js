import { createAction } from "@reduxjs/toolkit";
import Api from "../Api";


export const addFilmList = createAction('filmList/add')
export const changeTheme = createAction('theme/change')
export const loading = createAction('loading/set')

export const fetchFilms = (payload) => async (dispatch) => {
  dispatch(loading(true))
  const data = await Api.fetchPopularMovies(payload)
  dispatch(addFilmList([...data.results]))
  dispatch(loading(false))
}