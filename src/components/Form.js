import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = {
        value: '',
    };

    submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/location', {
            name: this.state.value
        })
    }

    handleChange = (e) =>  {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
