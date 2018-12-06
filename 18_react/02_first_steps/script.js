// var element = React.createElement('div', {}, 'Hello world!');

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        src: 'https://cdn.cinematerial.com/p/297x/qfeehcgu/harry-potter-and-the-chamber-of-secrets-movie-poster-md.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'https://images-na.ssl-images-amazon.com/images/I/51M7QPXDNPL._SY445_.jpg'
    },
    {
        id: 3,
        title: 'The Man from Earth',
        desc: 'Przegadany ale dobry',
        src: 'https://images-na.ssl-images-amazon.com/images/I/71P53vTkaDL._RI_SX200_.jpg'
    },

];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.src})
    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );


ReactDOM.render(element, document.getElementById('app'));
