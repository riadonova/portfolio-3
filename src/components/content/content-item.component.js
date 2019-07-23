import React from "react";

export class ContentItem extends React.Component {
    render() {
        const newContent = this.props.new;
        const img = require("../../img/" + newContent.img);
        return (
            <div>
                <img className="mb-4" src={img} alt="img"/>
                <div className="header-content bg-white">
                    <p className="category-content text-success">{newContent.category}</p>
                    <h2>{newContent.name}</h2>
                    <p className="author-content"><span className="text-secondary">written by </span>{newContent.author}
                    </p>
                    <div className="line-content mx-auto mb-3"></div>
                </div>
                <p className="text-content text-justify font-weight-light">{newContent.text}</p>
                <button type="button" className="btn btn-content btn-success text-white mb-4">CONTINUE READING
                </button>
                <div className="data-box text-left text-secondary mb-5">
                    <p className="mt-1">
                        <i className="material-icons mr-1">
                            query_builder
                        </i>
                        <span className="align-top">{newContent.date} &nbsp;|&nbsp;</span>
                        <i className="material-icons ml-2 mr-1">
                            chat_bubble_outline
                        </i> <span className="align-top">{newContent.comment} comment</span></p>
                </div>
            </div>
        )
    }
}