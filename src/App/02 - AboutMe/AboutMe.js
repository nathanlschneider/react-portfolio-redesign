import React, { Component } from 'react';
import './AboutMe.scss';
import Button from '../Shared/Components/Button';

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about">
                <div className="about-wall" />
                <Button value="Resume" />
            </div>
        );
    }
}
