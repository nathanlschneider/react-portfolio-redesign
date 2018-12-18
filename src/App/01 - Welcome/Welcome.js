import React, { Component } from 'react';
import './Welcome.scss';
import Button from '../Shared/Components/Button';

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome-wall" />
                <div className="welcome-content">
                    <div className="spacer" />
                    <div className="group">
                        <div className="welcome-title">Full Stack</div>
                        <div className="welcome-title">Web Developer</div>
                        <div className="welcome-name">html/scss/js/node</div>
                    </div>
                    <Button value="Engage!" color="light-blue" textColor="light" />
                </div>
            </div>
        );
    }
}
