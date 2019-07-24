import React from "react";
import '../tape/tape.component.scss';
import ImgInsOne from "../../img/cat-1.jpg";
import ImgInsTwo from "../../img/cat-2.jpg";
import ImgInsThree from "../../img/cat-3.jpg";
import ImgInsFour from "../../img/cat-4.jpg";
import ImgInsFive from "../../img/cat-5.jpg";
import ImgInsSix from "../../img/cat-6.jpg";

export class TapeComponent extends React.Component {
    render() {
        return (
            <div className="tape-inst mt-5 text-center">
                <div className="line"></div>
                <h6 className="pt-3"><i className="icofont-instagram mr-1"></i> FOLLOW ME ON INSTAGRAM</h6>
            <div className="row mt-3 no-gutters">
                <div className="img-inst col-sm-2">
                    <img src={ImgInsOne} alt="img"/>
                </div>
                <div className="img-inst col-sm-2">
                    <img src={ImgInsTwo} alt="img"/>
                </div>
                <div className="img-inst col-sm-2">
                    <img src={ImgInsThree} alt="img"/>
                </div>
                <div className="img-inst col-sm-2">
                    <img src={ImgInsFour} alt="img"/>
                </div>
                <div className="img-inst col-sm-2">
                    <img src={ImgInsFive} alt="img"/>
                </div>
                <div className="img-inst col-sm-2 p-0">
                    <img src={ImgInsSix} alt="img"/>
                </div>
            </div>
                <div className="line pt-5"></div>
            </div>
        )
    }
}