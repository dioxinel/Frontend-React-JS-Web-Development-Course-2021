import { useEffect, useState } from "react";
import Api from "./Api";

export const  useCocktails = (link) => {
  const [cocktails, setCocktails] = useState([]);


  useEffect(() => {
    async function fetch() {
      const data = await  Api.fetchCocktail(link)
      setCocktails(data.drinks)
      
      return data 
    }
    fetch()
    return
  }, [link])

  return { cocktails }
}