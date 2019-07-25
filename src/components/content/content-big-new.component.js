import React from "react";

export class BigNew extends React.Component {
    render() {
        const bigNewContent = this.props.bigNews;
        const img = require("../../img/" + bigNewContent.img);
        return (
            <div>
                <img className="mb-4" src={img} alt="img"/>
                <div className="header-content bg-white">
                    <p className="category-content text-success">{bigNewContent.category}</p>
                    <h2>{bigNewContent.name}</h2>
                    <p className="author-content"><span className="text-secondary">written by </span>{bigNewContent.author}
                    </p>
                    <div className="line-content mx-auto"></div>
                </div>
                <p className="text-content text-justify font-weight-light mt-3 pt-md-0 pt-sm-3">{bigNewContent.text}</p>
                <button type="button" className="btn btn-content btn-success text-white mb-4">CONTINUE READING
                </button>
                <div className="data-box text-left text-secondary mb-5">
                    <p className="mt-1">
                        <i className="material-icons mr-1">
                            query_builder
                        </i>
                        <span className="align-top">{bigNewContent.date} &nbsp;|&nbsp;</span>
                        <i className="material-icons ml-2 mr-1">
                            chat_bubble_outline
                        </i> <span className="align-top">{bigNewContent.comment} comment</span></p>
                </div>
            </div>
        )
    }
}