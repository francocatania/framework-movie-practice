import React from 'react';


export default function Search(props) {
  return (
    <span className='Search'>
      <input className='searchBar' type='text' placeholder='Search...' onChange={props.handleChange}/>
    </span>
  );
}

