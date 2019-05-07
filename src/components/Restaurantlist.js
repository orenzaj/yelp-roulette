import React, { Component } from 'react';
import axios from 'axios';


class Restarauntlist extends Component {
    state = {
        restaurant: []
    };

    componentDidMount() {
        axios.get('http://localhost:3000/yelp/api')
            .then(res => {
                let restaraunts = res.data.map(names => {
                    return (
                        <li key={names.id}>{names.name}</li>
                    );
                });

                this.setState({ restaurant: restaraunts});
            })
    }

    render() {
        return (
            <div className="restaurants">
                <ul>
                    {this.state.restaurant}
                </ul>
            </div>
        );
    }
}

export default Restarauntlist;
