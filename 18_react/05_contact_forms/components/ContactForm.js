var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', {className: 'contactForm'},
                React.createElement('div', {className: 'formField'},
                    React.createElement('label', {htmlFor: 'inputName'}, 'Imię: '),
                    React.createElement('input', {
                        id: 'inputName',
                        type: 'text',
                        placeholder: 'Imię',
                        value: this.props.contact.firstName,
                    }),
                ),
                React.createElement('div', {className: 'formField'},
                    React.createElement('label', {htmlFor: 'inputLastName'}, 'Nazwisko: '),
                    React.createElement('input', {
                        id: 'inputLastName',
                        type: 'text',
                        placeholder: 'Nazwisko',
                        value: this.props.contact.lastName,
                    })
                ),
                React.createElement('div', {className: 'formField'},
                    React.createElement('label', {htmlFor: 'inputLastName'}, 'Email: '),
                    React.createElement('input', {
                        id: 'inputLastName',
                        type: 'email',
                        placeholder: 'Email',
                        value: this.props.contact.email,
                    })
                ),
                React.createElement('button', {type: 'submit', className: 'btn'}, "Dodaj kontakt")
            )
        )
    },
});
