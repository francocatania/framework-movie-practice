const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const getFromTMDB = require('../lib/movieAPI.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


var movies = [
  {id: 0, title: 'Mean Girls', watched: true},
  {id: 1, title: 'Hackers', watched: false},
  {id: 2, title: 'The Grey', watched: false},
  {id: 3, title: 'Sunshine', watched: false},
  {id: 4, title: 'Ex Machina', watched: true},
];


app.get('/movies', (req, res) => {
  res.send(movies);
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
        res.send(404);
      } else {
        movies.push(JSON.parse(movie));
        console.log(movies);
        res.send(movies);
      }
    });
  });
});


app.put('/toggleWatched', (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  }).on('end', () => {
    let movieId = JSON.parse(body).id;
    for (var i = 0; i < movies.length; i++) {
      if(movies[i].id === movieId) {
        movies[i].watched = !movies[i].watched; 
      }
    }
    res.send('Successful Put')
  })
})


