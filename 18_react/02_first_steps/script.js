// var element = React.createElement('div', {}, 'Hello world!');

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
        React.createElement('li', {},
            React.createElement('h2', {}, 'Harry Potter'),
            React.createElement('p', {}, 'Film o czarodzieju')
            ),
        React.createElement('li', {},
            React.createElement('h2', {}, 'Król Lew'),
            React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
        )
    )
);


ReactDOM.render(element, document.getElementById('app'));
