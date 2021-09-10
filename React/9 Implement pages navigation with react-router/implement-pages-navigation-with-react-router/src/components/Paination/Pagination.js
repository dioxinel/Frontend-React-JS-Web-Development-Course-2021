import React, { useState } from "react";
import { Button } from "./Button";


export const Pagination = ({
   currentPage, 
   setCurrentPage, 
   totalPages}) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)

  function handleNextPage() {
    setPrevBtnDisabled(false)
    if(currentPage + 1 >= totalPages) {
      setNextBtnDisabled(true)
    }
    setCurrentPage(currentPage + 1)
  }
  
  function handlePrevPage() {
    setNextBtnDisabled(false)
    if (currentPage - 1 <= 1) {
      setPrevBtnDisabled(true)
    }
    setCurrentPage(currentPage - 1)
  }
  
    return (
      <div className={"pagination"}>
        <Button text={"Previous page"} handler={handlePrevPage} disabled={prevBtnDisabled} />
        <Button text={"Next page"} handler={handleNextPage} disabled={nextBtnDisabled}/>
      </div>
    );
}


