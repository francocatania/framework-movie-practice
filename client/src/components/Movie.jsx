import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='Movie'>
        <span className='movieTitle' >
          {this.props.title}
        </span>  
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