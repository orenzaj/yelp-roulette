import React, { Component } from 'react';
import Restaurantlist from './components/Restaurantlist';
import Form from './components/Form';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Form />
                {/*<Restaurantlist />*/}
            </div>);
    }
}

export default App;
