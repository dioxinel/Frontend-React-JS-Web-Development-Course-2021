import { useEffect, useState } from "react";
import Api from "./Api";

export const  useFetchMovies = (url) => {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetch() {
      const data = await  Api.fetchPopularMovies(url)
      setMovieList([...data.results])
      setTotalPages(data.total_pages)
      setCurrentPage(data.page)
      return data 
    }
    fetch()
    return
  }, [url])

  return { movieList, currentPage, totalPages }
}