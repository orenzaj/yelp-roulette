import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Form searchTerm="Whatchu wanna eat?" location="zip code"/>
            </div>
        );
    }
}

export default App;
