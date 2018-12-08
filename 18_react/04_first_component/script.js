var movies = [
    {
        id: 1,
        key: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: {src: 'https://cdn.cinematerial.com/p/297x/qfeehcgu/harry-potter-and-the-chamber-of-secrets-movie-poster-md.jpg',
            alt: 'Harry poster'}
    },
    {
        id: 2,
        key: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: {src: 'https://images-na.ssl-images-amazon.com/images/I/51M7QPXDNPL._SY445_.jpg',
            alt: 'Lion King Poster'}
    },
    {
        id: 3,
        key: 3,
        title: 'The Man from Earth',
        desc: 'Przegadany ale dobry',
        poster: {src: 'https://images-na.ssl-images-amazon.com/images/I/71P53vTkaDL._RI_SX200_.jpg', alt: 'The Man Poster'}
    },

];

var Movie = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        poster: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('li', {key: this.props.id},
            React.createElement(MovieTitle, {title: this.props.title}),
            React.createElement(MovieDescription, {desc: this.props.desc}),
            React.createElement('img', {src: this.props.poster.src, alt: this.props.poster.alt})
        );
    },
});

var MovieTitle = React.createClass({
   propTypes: {
       title: React.PropTypes.string.isRequired
   },

   render: function(){
       return React.createElement('h2', {}, this.props.title)
   }
});

var MovieDescription = React.createClass({
   propTypes: {
       desc: React.PropTypes.string.isRequired
   },

   render: function(){
       return React.createElement('p', {}, this.props.desc)
   }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function () {
        var moviesElements = this.props.movies.map(function(movie){
            // ważne: tworząc element w pętli, należy mu przekazać parametr key
            return React.createElement(Movie, movie)});
        return React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmóww'),
            React.createElement('ul', {}, moviesElements)
        );
    }
});

var element = React.createElement(MoviesList, {movies: movies});
console.log(element);
ReactDOM.render(element, document.getElementById('app'));
