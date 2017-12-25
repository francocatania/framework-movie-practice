import React from 'react';


export default function AddMovie() {
  return (
    <div className='AddMovie'>
      <input className="addMovieBar" type="text" placeholder="Type a Title and press Add" />
      <button className="addMovieButton" type="button">Add</button>
    </div>
  );
}