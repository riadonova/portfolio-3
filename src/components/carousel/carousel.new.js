import React from 'react';

export class CarouselNew extends React.Component {
    render() {
        const carouselNewContent = this.props.carouselNews;
        const img = require("../../img/" + carouselNewContent.img);
        return (
            <div className="text-center">
                <div className="item"><img src={img} alt="img"/>
                    <div className="carousel-header text-white">
                        <div>
                            <p className="mb-2"><a href="#">{carouselNewContent.category}</a></p>
                            <h3><a href="#">{carouselNewContent.name}</a></h3>
                            <p>{carouselNewContent.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 comment</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}