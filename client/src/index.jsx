import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Movie from './components/Movie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayingMovies: movies,
      // searchValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // this.setState({searchValue: event.target.value});

    let filteredMovies = movies.filter((movie) => {
      return movie.title.includes(event.target.value);
    });

    this.setState({displayingMovies: filteredMovies});
  }

  render() {
    return (
      <div className='MovieList'>
        <AddMovie />
        <Search handleChange={this.handleInputChange}/>

        {this.state.displayingMovies.map((movie) => {
          return <Movie title={movie.title} />
        })}

      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));



