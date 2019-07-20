import React from 'react';
import './navbar.component.scss';

export class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">RECIPE</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PLACES<span className="text-danger"> NEW</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
        <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li>
        <li cclassName="nav-item">
            <a className="nav-link" href="#">SHOP</a>
            </li>
            </ul>
            <form>
            <input type="text" placeholder="Search"/>
            <button type="submit"><i class="material-icons">
            search
            </i></button>
            </form>
            </div>
            </div>
            </nav>
        )
    }
}
