import React from 'react';
import "../header/header.component.scss";


export class Header extends React.Component {
    render() {
        return (
            <div className="container text-center mt-3">
                <div id="header" className="position-absolute" style={{top:0}}></div>
                <div><h1>Gastronomy</h1></div>
            </div>
        )
    }
}