import React, { Component } from 'react';
import './AboutMe.scss';
import Button from '../Shared/Components/Button';
import SVGComeponent from '../Shared/Components/SVG';

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about">
                <div className="about__wall" />
                <div className="grid-container">
                    <div className="about__image">
                        <SVGComeponent width="75%" height="75%" fill="#999" />
                    </div>
                    <div className="about__container">
                        <div className="about__title">About Me</div>
                        <div className="about__line" />
                        <div className="about__text">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit debitis iste
                            mollitia, possimus corrupti facere enim labore, asperiores nam cumque voluptatum doloribus
                            vel, eligendi neque. Porro quo corrupti quam dicta!
                        </div>
                    </div>
                    <div className="about__buttons">
                        <Button value="Resume" />
                        <Button value="LinkedIn" />
                        <Button value="Github" />
                        <Button value="Contact" color="medium" textColor="dark" />
                    </div>
                </div>
            </div>
        );
    }
}
