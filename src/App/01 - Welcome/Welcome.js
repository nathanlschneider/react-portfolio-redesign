import React, { Component } from 'react';
import './Welcome.scss';
import Button from '../Shared/Components/Button';

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome-wrapper">
                <div className="welcome-wall" />
                <div className="welcome-content-wrapper">
                    <div className="welcome-name">Nathan Schneider</div>
                    <div className="welcome-title">Web Developer</div>
                    <Button value="Engage!" color="light-blue" textColor="light" />
                </div>
            </div>
        );
    }
}
