import React from "react";

export class MiniNew extends React.Component {
    render() {
        const miniNewContent = this.props.miniNews;
        const img = require("../../img/" + miniNewContent.img);
        return (
            <div className="mb-4 mini-new">
                <img src={img} alt="img"/>
                <h6 className="mt-2"><a href="#">{miniNewContent.name}</a></h6>
            </div>
        )
    }
}

