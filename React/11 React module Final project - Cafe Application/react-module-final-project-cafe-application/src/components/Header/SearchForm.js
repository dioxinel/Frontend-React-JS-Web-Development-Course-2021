import React, { useState } from "react";
import { useHistory } from 'react-router';

export function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    history.push(`/search/${evt.target[0].value}`)
    setKeyword('')
  }
  
  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  return (
  <form onSubmit={handleSubmit}>
    <input 
      type='text' 
      placeholder={'Search...'} 
      value={keyword}
      onChange={handleChange}
      />
    <button type='submit'>Search</button>
  </form>
  );
}
