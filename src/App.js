import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
    state = {
        restaraunt: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/yelp/api')
            .then(res => console.log(res.data.name));
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
