import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
    state = {
        restaraunt: []
    };

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY;
        axios.get('https://api.yelp.com/v3/businesses/search')
            .then(res => console.log(res.name));
    };

    render() {
        return (
            <div className="App">
            <header className="App-header">
            </header>
            </div>
        );
    }
}

export default App;
