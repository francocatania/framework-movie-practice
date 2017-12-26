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
      movieToAdd: '',
      // searchValue: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
  }

  handleInputChange(event) {
    // this.setState({searchValue: event.target.value});
    let filteredMovies = movies.filter((movie) => {
      return movie.title.includes(event.target.value);
    });

    this.setState({displayingMovies: filteredMovies});
  }

  handleAddMovieInputChange(event) {
    this.setState({movieToAdd: event.target.value})
  }

  handleClick(event) {
    if (this.state.movieToAdd !== '') {
      let newMovie = {title: this.state.movieToAdd};
      movies.push(newMovie);
      this.setState({
        displayingMovies: movies,
        movieToAdd: ''
      });
      

    } else {
      console.log('type something to enter');
    }

  }

  render() {
    return (
      <div className='MovieList'>
        <AddMovie clickHandler={this.handleClick} handleChange={this.handleAddMovieInputChange} inputValue={this.state.movieToAdd}/>
        <Search handleChange={this.handleInputChange}/>

        {this.state.displayingMovies.map((movie) => {
          return <Movie title={movie.title} />
        })}

      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));



