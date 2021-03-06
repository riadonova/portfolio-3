import React from 'react';
import './form.component.scss';

export class Form extends React.Component {
    render () {
        return (
            <div className="container">
            <div className="mt-5 bg-light p-3">
            <div className="row">
            <div className="col-lg-6 col-md-5 col-12 text-form">
            Subscribe my Newsletter for new blog posts, tips & new photos. Let's stay updated!
             </div>
          <div className="col-lg-2 col-md-2 col-12 my-1">
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
            <div className="col-lg-2 col-md-2 col-12 my-1">
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
            <div className="col-lg-2 col-md-3 col-12 my-1">
            <button type="button" className="btn btn-dark btn-block">SUBSCRIBE</button>
            </div>
            </div>
            </div>
            </div>
        )
    }
}