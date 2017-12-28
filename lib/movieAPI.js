const request = require('request');

const TMDB = 'https://api.themoviedb.org/3/search/movie?api_key='
const API_KEY = require('../API-KEY.js');


let getFromTMDB = (query, cb) => {
  let QUERY = `&query=${query}&page=1`;
  request(TMDB + API_KEY + QUERY, (err, response, data) => {
    if (err || JSON.parse(data).results[0] === undefined) {
      cb(null, err);
    } else {
      let movie = JSON.parse(data).results[0];
      let movieObj = {
        id: movie.id,
        title: movie.title,
        watched: false,
      };
      cb(JSON.stringify(movieObj));
    }
  });
};


module.exports = getFromTMDB;


// `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}
// &query=${}
// &page=1`