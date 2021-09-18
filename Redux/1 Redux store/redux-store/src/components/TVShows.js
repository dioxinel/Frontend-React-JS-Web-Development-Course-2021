import { useEffect } from 'react';
import { Redirect } from 'react-router';


export function TVShows() {
  useEffect(()=>{alert("This page is under construction")}, [])
  
  return (
    <Redirect to={'/'} />
  );
}

