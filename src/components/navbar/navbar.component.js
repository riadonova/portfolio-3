import React from 'react';
import './navbar.component.scss';
import imgDropOne from '../../img/res-img-1.jpg';
import imgDropTwo from '../../img/res-img-2.jpg';
import imgDropThree from '../../img/res-img-3.jpg';
import imgDropFour from '../../img/res-img-4.jpg';

export class Navbar extends React.Component {
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-fixed">
                <div className="container position-relative">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav pr-3 mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link pl-0" href="#">HOME<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">RECIPE</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PLACES<span className="text-danger"> NEW</span>
                                </a>
                                <div className="dropdown-menu shadow-sm p-0 p-lg-3" aria-labelledby="navbarDropdown">
                                    <div className="row m-0">
                                        <div className="col-sm-3 no-gutters mt-3 mb-2">
                                            <div className="drop-item text-center">
                                            <img src={imgDropOne} alt="img"/>
                                            <p className="mt-3"><a href="#">The Best Gourmet Restaurants Around The World</a></p>
                                                <p className="drop-date text-secondary font-weight-light m-0">July 25, 2019</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 no-gutters mt-3 mb-2">
                                            <div className="drop-item text-center">
                                            <img src={imgDropTwo} alt="img"/>
                                            <p className="mt-3"><a href="#">The Best Gourmet Restaurants Around The World</a></p>
                                                <p className="drop-date text-secondary font-weight-light m-0">July 25, 2019</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 no-gutters mt-3 mb-2">
                                            <div className="drop-item text-center">
                                            <img src={imgDropThree} alt="img"/>
                                            <p className="mt-3"><a href="#">The Best Gourmet Restaurants Around The World</a></p>
                                                <p className="drop-date text-secondary font-weight-light m-0">July 25, 2019</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 no-gutters mt-3 mb-2">
                                            <div className="drop-item text-center">
                                                <img src={imgDropFour} alt="img"/>
                                            <p className="mt-3"><a href="#">The Best Gourmet Restaurants Around The World</a></p>
                                                <p className="drop-date text-secondary font-weight-light m-0">July 25, 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHOP</a>
                            </li>
                        </ul>
                        <form className="my-search m-0">
                            <input type="text" placeholder="Search"/>
                            <button type="submit">
                                <i className="material-icons">
                                search
                                </i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
