var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {className: 'contactItem'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://icons.veryicon.com/png/Culture/Smashing%20Royal/User.png'
                }),
                React.createElement('div', {className: 'contactData'},
                    React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
                    React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                    React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
                        this.props.item.email
                    )
                ),
                React.createElement('div', {className: 'icon'}, "")
            )
        )
    },
});
