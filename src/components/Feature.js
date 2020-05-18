import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
    render() {
        return (
            <h2>Feature Data</h2>
        )
    }
};

export default requireAuth(Feature);