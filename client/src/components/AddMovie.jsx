import React from 'react';


export default function AddMovie(props) {
  return (
    <div className='AddMovie'>
      <input className="addMovieBar" type="text" placeholder="Type a Title and press Add" onChange={props.handleChange} value={props.inputValue}/>
      <button className="addMovieButton" type="button" onClick={props.clickHandler}>Add</button>
    </div>
  );
}