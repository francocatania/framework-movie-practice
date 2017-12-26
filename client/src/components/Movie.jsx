import React from 'react';
import movies from '../index.jsx'

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.handleMovieClick(this.props.index);
  }

  render() {
    return (
      <div className='Movie' onClick={this.handleClick} >
        <span className='movieTitle' >
          {this.props.title}
        </span> 
        {this.props.watched ? (
          <span className='watched'> Watched </span>
          ) : (<span />)} 
      </div>
    )
  }
};

export default Movie;





// <div className='Movie'>
//         <img className='movieImg' src='' />
//         <span className='movieTitle' >
//           {this.props.title}
//         </span>
//         <div className='movieDescription'>
//           A short description here.
//         </div>
//       </div>