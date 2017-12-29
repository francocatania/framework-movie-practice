const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const getFromTMDB = require('../lib/movieAPI.js');
const sequelize = require('../database/index.js');
const Movie = require('../database/index.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


app.get('/movies', (req, res) => {
  Movie.findAll().then(movies => {
    res.send(movies);
  })
});


app.post('/movie', (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);

  }).on('end', () => {
    let query = body.toString();
    getFromTMDB(query, (movie, err) => {
      if(movie === null) {
        console.log('NO ESTA NABO', err);
        res.send(502);
      } else {
        let resMovie = JSON.parse(movie);
        Movie.create({
          id: resMovie.id,
          title: resMovie.title,
          description: resMovie.description,
          img: resMovie.img,
          // duration: '',  // no viene en el Search query de la API, hay que hacer un query mas complejo.
          watched: false,
        }).then(() => {
          Movie.findAll().then(movies => {
            res.send(movies);
          })
        });
      }
    });
  });
});


app.put('/toggleWatched', (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  }).on('end', () => {
    let movie = JSON.parse(body);
    // for (var i = 0; i < movies.length; i++) {
    //   if(movies[i].id === movieId) {
    //     movies[i].watched = !movies[i].watched; 
    //   }
    // }
    Movie.update({
      watched: !movie.watchedCurrentState
    }, {
      where: {
        id: movie.id
      }
    })

    res.send('Successful Put')
  })
})

