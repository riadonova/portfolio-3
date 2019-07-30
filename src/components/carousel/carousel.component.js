import React from 'react';
import './carousel.component.scss'
import {CarouselNew} from "./carousel.new";
import {carouselNews} from "../../data/news";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Carousel extends React.Component {
    render() {
        return (
            <div className="mt-5">

                <OwlCarousel className="owl-theme"
                             loop
                             center
                             margin={10}
                             items={2}
                             nav
                             dots={false}
                             navClass={['carousel-arrow-left', 'carousel-arrow-right']}
                >
                    {carouselNews.map(newItem => <CarouselNew carouselNews={newItem}/>)}
                    {carouselNews.map(newItem => <CarouselNew carouselNews={newItem}/>)}
                    {carouselNews.map(newItem => <CarouselNew carouselNews={newItem}/>)}
                    {carouselNews.map(newItem => <CarouselNew carouselNews={newItem}/>)}
                    {carouselNews.map(newItem => <CarouselNew carouselNews={newItem}/>)}
                    {carouselNews.map(newItem => <CarouselNew carouselNews={newItem}/>)}
                </OwlCarousel>
            </div>
        )
    }
}