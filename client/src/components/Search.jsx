import React from 'react';


export default function Search(props) {
  return (
    <div className='Search'>
      <input className='searchBar' type='text' placeholder='Search for a movie' onChange={props.handleChange}/>
    </div>
  );
}

