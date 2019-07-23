import React from 'react';
import './content.component.scss';
import Icofont from 'react-icofont';
import {BigNew} from "./content-big-new.component";
import {bigNews} from "../../data/news";
import {MiniNew} from "./content-mini-new.component";
import {miniNews} from "../../data/news";
import imgAbout from '../../img/cat.jpg';
import imgPost from '../../img/sushi.jpg';

export class Content extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8 justify-content-center text-center">
                        {bigNews.map(newItem => <BigNew bigNews={newItem}/>)}
                    </div>

                    <div className="col-sm-4 text-center">
                        <div className="block-info mb-4 pb-4">
                            <div className="bg-light p-2">
                                <h6 className="m-0">ABOUT ME</h6>
                            </div>
                            <img className="mt-4 mb-3" src={imgAbout} alt="img-cat"/>
                            <p className="font-weight-light">Hello! My name is Cooking Cat.
                                I like to cook when my masters are not at home.</p>
                        </div>
                        <div className="block-info mb-4 pb-4">
                            <div className="bg-light p-2">
                                <h6 className="m-0">KEEP IN TOUCH</h6>
                            </div>
                        </div>
                        <div className="block-info mb-4 pb-4">
                            <div className="bg-light p-2">
                                <h6 className="m-0">RECENT POSTS</h6>
                            </div>
                            <img className="mt-4 mb-3" src={imgPost} alt="img-Sushi"/>
                            <div className="header-min p-3 bg-white text-dark">
                                <h5><a href="#">Cooking sushi at home</a></h5>
                            </div>
                            <div className="mini-news">
                            <div className="row">
                                <div className="col-sm-6">
                                    {miniNews.slice(0,3).map(newItem => <MiniNew miniNews={newItem}/>)}
                                </div>
                                <div className="col-sm-6">
                                    {miniNews.slice(3,6).map(newItem => <MiniNew miniNews={newItem}/>)}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}