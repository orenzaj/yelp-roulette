import React, { Component } from 'react';
import axios from 'axios';
import Restaurantlist from './Restaurantlist';

class Form extends Component {
    state = {
        term: '',
        location: '',
        submitted: false
    };

    submit = (e) => {
        e.preventDefault();
        this.setState({submitted: true});

        axios.post('http://localhost:3000/location', {
            term: this.state.term,
            location: this.state.location
        });

        console.log(this.state.submitted);
    }

    getTerm = (e) =>  {
        this.setState({ term: e.target.value });
    }

    getLocation = (e) =>  {
        this.setState({ location: e.target.value });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.submit}>
                <label>
                    Name:
                    <input type="text" value={this.state.term} onChange={this.getTerm} />
                    <input type="text" value={this.state.location} onChange={this.getLocation} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {this.state.submitted && <Restaurantlist /> }
        </div>
        );
    }
}

export default Form;
