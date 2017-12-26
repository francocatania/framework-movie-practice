import React from 'react';
import movies from '../index.jsx'

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: this.props.watched,
    }
  }

  handleClick() {
    this.setState({watched: !this.state.watched});
    movies[this.props.index].watched = !movies[this.props.index].watched

  }

  render() {
    return (
      <div className='Movie' onClick={this.handleClick.bind(this)} >
        <span className='movieTitle' >
          {this.props.title}
        </span> 
        {this.state.watched ? (
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