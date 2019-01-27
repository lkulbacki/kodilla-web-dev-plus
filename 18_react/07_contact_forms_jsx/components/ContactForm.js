var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <form className={'contactForm'}>
                <div className={'formField'}>
                    <label htmlFor={'inputName'}>Imię: </label>
                    <input id='inputName' type='text' placeholder='Imię' value={this.props.contact.firstName}/>
                </div>
                <div className={'formField'}>
                    <label htmlFor={'inputLastName'}>Imię: </label>
                    <input id='inputLastName' type='text' placeholder='Nazwisko' value={this.props.contact.lastName}/>
                </div>
                <div className={'formField'}>
                    <label htmlFor={'inputEmail'}>Email: </label>
                    <input id='inputEmail' type='email' placeholder='contact@example.com' value={this.props.contact.email}/>
                </div>
                <button type={'submit'} className={'btn'}>Dodaj kontakt</button>
            </form>
        )

    },
});
