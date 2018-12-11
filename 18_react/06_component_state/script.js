var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', {className: 'counterWrapper'},
            React.createElement('div', {},
                React.createElement('p', {}, 'Licznik: ' + this.state.counter)
            ),
            React.createElement('div', {className: 'counterControls'},
                React.createElement('button', {type: '', className: 'btn btn--increase', onClick: this.increment}, "+"),
                React.createElement('button', {type: '', className: 'btn btn--decrease', onClick: this.decrement}, "-")
            ),
        );
    }
});

var Counters = React.createClass({
    render: function () {
        return React.createElement('div', {className: 'counters'},
            React.createElement(Counter),
            React.createElement(Counter)
        )
    }
});

var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));
