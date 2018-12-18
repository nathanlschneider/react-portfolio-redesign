import React, { Component } from 'react';
import './App.scss';
import Navigation from './00 - Navigation/Navigation';
import Welcome from './01 - Welcome/Welcome';
import AboutMe from './02 - AboutMe/AboutMe';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navigation />
                <Welcome />
                <AboutMe />
            </div>
        );
    }
}

export default App;
