import React from 'react';
import './content.component.scss';
import Icofont from 'react-icofont';
import StickyBox from "react-sticky-box/dist/esnext";
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
                        <div>
                            <p className="pagination justify-content-center">
                                <a>
                                <i className="material-icons text-secondary">
                                    keyboard_arrow_left
                                </i>
                                <span className="text-secondary align-top">
                                    NEWER POSTS
                                </span>
                                </a>
                                <span className="mx-3">/</span>
                                <a href="#">
                                <span className="align-top">OLDER POSTS</span>
                                   <i className="material-icons">keyboard_arrow_right
                                   </i>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-4 text-center">
                        <StickyBox style={{float: "right", width: "100%"}}>
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
                                <div className="row">
                                    <div className="col-sm-12 mt-4">
                                        <div className="mx-auto">
                                            <div className="icon-bg mx-2">
                                                <Icofont icon="facebook"/>
                                            </div>
                                            <div className="icon-bg mx-2">
                                                <Icofont icon="twitter"/>
                                            </div>
                                            <div className="icon-bg mx-2">
                                                <Icofont icon="instagram"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-info mb-4 pb-4">
                                <div className="bg-light p-2">
                                    <h6 className="m-0">RECENT POSTS</h6>
                                </div>
                                <img className="mt-4 mb-3" src={imgPost} alt="img-Sushi"/>
                                <div className="header-min p-3 bg-white text-dark">
                                    <h5 className="pt-2"><a href="#">Cooking sushi at home</a></h5>
                                </div>
                                <div className="mini-news">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            {miniNews.slice(0, 3).map(newItem => <MiniNew miniNews={newItem}/>)}
                                        </div>
                                        <div className="col-sm-6">
                                            {miniNews.slice(3, 6).map(newItem => <MiniNew miniNews={newItem}/>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-info mb-4 pb-4">
                                <div className="bg-light p-2 mb-4">
                                    <h6 className="m-0">CATEGORIES</h6>
                                </div>
                                <div className="text-left font-weight-light category-info">
                                    <ul className="p-0">
                                        <li className="line"><a href="#">Traditional</a></li>
                                        <li className="line"><a href="#">Home</a></li>
                                        <li className="line"><a href="#">Unusual</a></li>
                                        <li className="line"><a href="#">Light food</a></li>
                                    </ul>
                                </div>
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </div>
        )
    }
}