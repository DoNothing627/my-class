import React from "react";
import './sass/scss/Class.css';
import tinhthan1 from '../Wrap/data/cùng nhau/9.jpg';
import tinhthan2 from '../Wrap/data/cùng nhau/3.jpg';
import tinhthan3 from '../Wrap/data/cùng nhau/6.jpg';
import dale2 from '../Wrap/data/group/4.jpg';
import dale1 from '../Wrap/data/group/11.jpg';
import dale3 from '../Wrap/data/group/9.jpg';
import couple1 from '../Wrap/data/couple/1.jpg';
import couple2 from '../Wrap/data/couple/24.jpg';
import couple3 from '../Wrap/data/couple/9.jpg';
import animal1 from '../Wrap/data/lạc thú/3.jpg';
import animal2 from '../Wrap/data/lạc thú/6.jpg';
import animal3 from '../Wrap/data/lạc thú/9.jpg';
import beauty1 from '../Wrap/data/xinh nè mn/5.jpg';
import beauty2 from '../Wrap/data/xinh nè mn/2.jpg';
import beauty3 from '../Wrap/data/xinh nè mn/21.jpg';
import kiniem1 from '../Wrap/data/thứ giết chết chúng ta chính là kỉ niệm/15.jpg';
import kiniem2 from '../Wrap/data/thứ giết chết chúng ta chính là kỉ niệm/69.jpg';
import kiniem3 from '../Wrap/data/thứ giết chết chúng ta chính là kỉ niệm/79.jpg';
import saunay1 from '../Wrap/data/chúng ta của sau này/10.jpg';
import saunay2 from '../Wrap/data/chúng ta của sau này/18.jpg';
import saunay3 from '../Wrap/data/chúng ta của sau này/30.jpg';


export default function Class() {

    const click = () => {
        console.log('click');
    }

    return (
        <>

            <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="./sass/scss/Class.module.css"></link>
            <br />
            <h1>#Moments</h1>
            <div id="main" className="container" onClick={click}>
                <div id="gallery" className="row">
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src={tinhthan1} alt="" />
                            <img src={tinhthan2} alt="" />
                            <img src={tinhthan3} alt="" />
                        </div>
                        <p>Ấm áp tình thân</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src={dale1} alt="" />
                            <img src={dale2} alt="" />
                            <img src={dale3} alt="" />
                        </div>
                        <p>Đá lẻ</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src={couple1} alt="" />
                            <img src={couple2} alt="" />
                            <img src={couple3} alt="" />
                        </div>
                        <p>Đôi bạn cùng tiến</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src={animal1} alt="" />
                            <img src={animal2} alt="" />
                            <img src={animal3} alt="" />
                        </div>
                        <p>Lạc thú</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src={beauty1} alt="" />
                            <img src={beauty2} alt="" />
                            <img src={beauty3} alt="" />
                        </div>
                        <p>Xinh nè các bạn</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src={kiniem1} alt="" />
                            <img src={kiniem2} alt="" />
                            <img src={kiniem3} alt="" />
                        </div>
                        <p>Thứ giết chết chúng ta chính là kỉ niệm :(((</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src={saunay1} alt="" />
                            <img src={saunay2} alt="" />
                            <img src={saunay3} alt="" />
                        </div>
                        <p>Chúng ta của sau này</p>
                    </div>
                </div>
            </div>
        </>
    );
}