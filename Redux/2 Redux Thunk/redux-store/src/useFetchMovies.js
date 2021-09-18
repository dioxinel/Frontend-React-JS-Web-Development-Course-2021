import { useEffect, useState } from "react";
import Api from "./Api";

export const  useFetchMovies = (url) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetch() {
      const data = await  Api.fetchPopularMovies(url)
      setTotalPages(data.total_pages)
      setCurrentPage(data.page)
      return data 
    }
    fetch()
    return
  }, [url])

  return { currentPage, totalPages }
}