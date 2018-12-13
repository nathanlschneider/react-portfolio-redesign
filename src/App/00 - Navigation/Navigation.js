import React, { Component } from 'react';
import './Navigation.scss';
import SVGComponent from '../Shared/Components/svg_logo';

export default class Navigation extends Component {
    handleClick() {
        alert('click');
    }

    render() {
        return (
            <div className="nav">
                <div className="nav-logo-wrapper">
                    <SVGComponent width="50" height="50" />
                    <div className="logo-line" />
                    <div className="logo-name-wrapper">
                        <div className="logo-firstname">Nathan</div>
                        <div className="logo-lastname">Schneider</div>
                    </div>
                </div>
                <div className="menu-btn-wrapper" onClick={this.handleClick}>
                    <div className="menu-btn-bar" />
                    <div className="menu-btn-bar" />
                    <div className="menu-btn-bar" />
                </div>
            </div>
        );
    }
}
