import React, { Component } from 'react';
import './App.scss';
import Navigation from './00 - Navigation/Navigation';
import Welcome from './01 - Welcome/Welcome';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navigation />
                <Welcome />
            </div>
        );
    }
}

export default App;
