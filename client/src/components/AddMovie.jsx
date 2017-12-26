import React from 'react';


export default function AddMovie(props) {
  return (
    <div className='AddMovie'>
      <input className="addMovieBar" type="text" placeholder="Add a movie title" onChange={props.handleChange} value={props.inputValue}/>
      <button className="addMovieButton" type="button" onClick={props.clickHandler}>Add</button>
    </div>
  );
}