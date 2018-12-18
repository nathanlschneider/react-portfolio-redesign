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
                <div className="nav-logo">
                    <SVGComponent width="50" height="50" />
                    <div className="nav-logo-line" />
                    <div className="nav-logo-name">
                        <div className="nav-logo-firstname">Nathan</div>
                        <div className="nav-logo-lastname">Schneider</div>
                    </div>
                </div>
                <div className="nav-menu-links">
                    <div className="nav-menu-btn" onClick={this.handleClick}>
                        <div className="nav-menu-btn-bar" />
                        <div className="nav-menu-btn-bar" />
                        <div className="nav-menu-btn-bar" />
                    </div>
                </div>
            </div>
        );
    }
}
