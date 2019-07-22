import React from 'react';
import './content.component.scss';
import img2 from '../../img/food-img-2.jpg';

export class Content extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8 justify-content-center text-center">
                        <img className="mb-4" src={img2} alt="img"/>
                        <div className="header-content bg-white">
                            <p className="category-content text-success">LIGHT FOOD</p>
                            <h2>Italian pasta with pesto</h2>
                            <p className="author-content"><span className="text-secondary">written by</span> Victoria
                            </p>
                            <div className="line-content mx-auto mb-3"></div>
                            <p className="text-content text-left font-weight-light">Lommodo ligula eget dolor. Aenean massa. Cum sociis que
                                penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam
                                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis
                                enim. Donec pede justo fringilla vel aliquet nec vulputate eget. Lorem ispum dolore
                                siamet ipsum dolor.

                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                                nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere.
                                At vero eos et accusamus et iusto odio dignissimos ducimus quilor.</p>
                        <button type="button" className="btn btn-content btn-success text-white mb-3">CONTINUE READING</button>
                        </div>
                        <div className="data-box">
                                    j
                        </div>
                    </div>
                    <div className="col-sm-4">
                        2
                    </div>
                </div>
            </div>
        )
    }
}