import React from 'react';

export const iconsConfig = {
  homeowner: ({ active, ...props }) => (
    <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
    {...props} 
    xmlns="http://www.w3.org/2000/svg">
      <path d="M17 15H19V17H17V15ZM17 11H19V13H17V11ZM17 7H19V9H17V7ZM13.74 7L15 7.84V7H13.74Z" fill={active ? "#376FDB" : "#757575"}/>
      <path d="M10 3V4.51L12 5.84V5H21V19H17V21H23V3H10Z" fill={active ? "#376FDB" : "#757575"}/>
      <path d="M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7ZM10 19H13V11.16L8.17 8.09L3 11.38V19H6V13H10V19Z" fill={active ? "#376FDB" : "#757575"}/>
    </svg>

  ),

  professional: ({ active, ...props }) => (
    <svg
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
      <path d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM4 9H20V14H15V11H9V14H4V9ZM13 15H11V13H13V15ZM19 19H5V16H9V17H15V16H19V19Z" fill={active ? "#376FDB" : "#757575"}/>
    </svg>
  ),

  arrowInNextBtn: ({ ...props }) => (
    <svg 
      width="8"
      height="13" 
      viewBox="0 0 8 13" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
      <path d="M0.722592 11.0968L5.16037 6.36916L0.442417 1.92108L1.80873 0.468708L7.98905 6.28279L2.17497 12.4631L0.722592 11.0968Z" fill="white"/>
    </svg>

  ),

  arrowInPrevBtn: ({ ...props }) => (
    <svg 
    width="8" 
    height="12" 
    viewBox="0 0 8 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="#323232"/>
    </svg>
  ),

  stageTick: ({ ...props }) => (
    <svg 
    width="19" 
    height="14" 
    viewBox="0 0 19 14" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <path d="M17.5644 0L16.876 0.703622C13.6016 4.05763 10.0754 7.92621 6.80303 11.3097L1.98422 7.25351L1.23507 6.6223L0 8.16408L0.749143 8.79525L6.25636 13.4309L6.93464 14L7.5623 13.3585C11.0377 9.79857 14.8172 5.61968 18.2528 2.10052L18.9412 1.3969L17.5644 0Z" fill="#376FDB"/>
    </svg>

  ),
};

