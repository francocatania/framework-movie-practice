import React from 'react';


export default function Search(props) {
  return (
    <div className='Search'>
      <input className='searchBar' type='text' placeholder='Search...' onChange={props.handleChange}/>
    </div>
  );
}

