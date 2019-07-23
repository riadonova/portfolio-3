import React from 'react';
import './content.component.scss';
import img2 from '../../img/food-img-2.jpg';
import {ContentItem} from "./content-item.component";
import {news} from "../../data/news";

export class Content extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8 justify-content-center text-center">
                        {news.map(newItem => <ContentItem new={newItem} />)}
                    </div>
                    <div className="col-sm-4">
                        2
                    </div>
                </div>
            </div>
        )
    }
}