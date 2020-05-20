import React, { Component } from 'react';
import './Loader.scss';

export default class Loader extends Component {
    render() {
        return (
            <div className="lds-css">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
