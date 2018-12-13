import React, { Component } from 'react';
import '../../../Util/_util.scss';
import './Button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    static defaultProps = {
        value: 'Button',
        color: 'light-blue',
        textColor: 'light'
    };

    componentDidMount() {}

    render() {
        return (
            <button className={`main-button bg-${this.props.color} text-${this.props.textColor}`}>
                {this.props.value}
            </button>
        );
    }
}
