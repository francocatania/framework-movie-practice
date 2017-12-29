const Sequelize = require('sequelize');

const sequelize = new Sequelize('MovieList', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Movie = sequelize.define('movie', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  img: Sequelize.STRING,
  duration: Sequelize.STRING,
  watched: Sequelize.BOOLEAN,
});


sequelize.sync()
  .then(() => Movie.create({
    id: 0000,
    title: 'Rocky IV',
    description: 'Es la que matan a Apolo al principio y después Rocky se va a entrenar a Siberia y lo termina cagando a palos al ruso. Li-culón.',
    img: 'https://static.rogerebert.com/uploads/movie/movie_poster/rocky-iv-1985/large_ioS8yARtC4VcKYrgUImaoFRKFck.jpg',
    duration: '105',
    watched: false,
  }));


module.exports = sequelize;
module.exports = Movie;