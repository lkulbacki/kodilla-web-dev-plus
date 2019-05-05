import React from 'react';

class AddCommentWidget extends React.Component {
    constructor () {
        super();
        this.state = {text: ''};
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log(this.state.text);
        if (this.state.text !== "") {
            this.props.addComment(this.state.text);
        }
        else {
            this.props.addComment('PUSTY KOMENTARZ');
        }
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default AddCommentWidget;
