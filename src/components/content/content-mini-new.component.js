import React from "react";

export class MiniNew extends React.Component {
    render() {
        const miniNewContent = this.props.miniNews;
        const img = require("../../img/" + miniNewContent.img);
        return (
            <div className="mb-4">
                <img className="mb-2" src={img} alt="img"/>
                <h6>{miniNewContent.name}</h6>
            </div>
        )
    }
}

