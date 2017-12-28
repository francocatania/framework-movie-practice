import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Movie from './components/Movie.jsx';
import $ from 'jquery';

const SERVER_URL = 'http://127.0.0.1:3000';
const GET_MOVIES = '/movies';
const ADD_MOVIE = '/movie';
const TOGGLE_WATCHED = '/toggleWatched';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayingMovies: [],
      movieToAdd: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleWatchedButton = this.handleWatchedButton.bind(this);
    this.handleToAllMoviesButton = this.handleToAllMoviesButton.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }


  componentDidMount() {
    $.get(SERVER_URL + GET_MOVIES, (data) => {
      this.setState({allMovies: data});
      this.setState({displayingMovies: data});
    });
  }


  handleInputChange(event) {
    let filteredMovies = this.state.allMovies.filter((movie) => {
      return this.state.allMovies.title.includes(event.target.value);
    });

    this.setState({displayingMovies: filteredMovies});
  }


  handleAddMovieInputChange(event) {
    this.setState({movieToAdd: event.target.value})
  }


  handleSuccess(data) {
    console.log('data', data);
    this.setState({
      allMovies: data,
      displayingMovies: data,
    });
  }

  handleMovieNotfound() {
    alert('Sorry, we couldn\'t find your movie.. Bummer!');
  }

  handleClick(event) {
    if (this.state.movieToAdd !== '') {
      let movieToAdd = this.state.movieToAdd;
      // let newMovie = {
      //   title: this.state.movieToAdd,
      //   watched: false,
      //   id: Math.random(0, 99999)
      // };

      $.ajax({
        type: "POST",
        url: SERVER_URL + ADD_MOVIE,
        data: movieToAdd,
        success: this.handleSuccess,
        error: this.handleMovieNotfound,
      });

      this.setState({
        movieToAdd: ''
      });

    } else {
      console.log('type something to enter');
    }
  }


  handleMovieClick(index, id) {
    this.state.displayingMovies[index].watched = !this.state.displayingMovies[index].watched

    let dataObj = {
      id: id,
      index: index,
    }

    $.ajax({
        type: "PUT",
        url: SERVER_URL + TOGGLE_WATCHED,
        data: JSON.stringify(dataObj),
        success: console.log,
      });

    this.setState({displayingMovies: this.state.displayingMovies});
  }

    
  handleWatchedButton() {
    let watchedMovies = this.state.displayingMovies.filter((movie) => {
      return movie.watched;
    });
    
    this.setState({displayingMovies: watchedMovies});
  }


  handleToAllMoviesButton() {
    this.setState({displayingMovies: this.state.allMovies});
  } 


  render() {
    return (
      <div className='MovieList'>
        <AddMovie clickHandler={this.handleClick} handleChange={this.handleAddMovieInputChange} inputValue={this.state.movieToAdd}/>
        
        <div className='searchDiv'>
          <span> <button onClick={this.handleToAllMoviesButton} > All Movies </button> </span>
          <span> <button onClick={this.handleWatchedButton} > Watched </button> </span>
          <Search handleChange={this.handleInputChange}/>
        </div>

        {this.state.displayingMovies.map((movie, index) => {
          return <Movie key={movie.id} id={movie.id} title={movie.title} index={index} watched={movie.watched} handleMovieClick={this.handleMovieClick} />
        })}

      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));



