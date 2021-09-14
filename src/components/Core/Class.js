import React from "react";
import './sass/scss/Class.css';


export default function Class() {

    const click = () => {
        console.log('click');
    }

    return (
        <>

            <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
            {/* <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/css/bootstrap.min.css" /> */}
            <link rel="stylesheet" href="./sass/scss/Class.module.css"></link>
            <br />
            <h1>#Moments</h1>
            <div id="main" className="container" onClick={click}>
                <div id="gallery" className="row">
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src="http://lorempixel.com/400/400/sports/" alt="" />
                            <img src="http://lorempixel.com/400/400/nature/" alt="" />
                            <img src="http://lorempixel.com/400/400/animals/" alt="" />
                        </div>
                        <p>Holidays</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src="http://lorempixel.com/400/400/city/" alt="" />
                            <img src="http://lorempixel.com/400/400/fashion/" alt="" />
                            <img src="http://lorempixel.com/400/400/people/" alt="" />
                        </div>
                        <p>Travels</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src="http://lorempixel.com/400/400/business/" alt="" />
                            <img src="http://lorempixel.com/400/400/food/" alt="" />
                            <img src="http://lorempixel.com/400/400/transport/" alt="" />
                        </div>
                        <p>Working !</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src="http://lorempixel.com/400/400/nightlife/" alt="" />
                            <img src="http://lorempixel.com/400/400/technics/" alt="" />
                            <img src="http://lorempixel.com/400/400/abstract/" alt="" />
                        </div>
                        <p>2012 - 2013</p>
                    </div>
                    <div className="col-xs-4 gallery-item">
                        <div className="album">
                            <img src="http://lorempixel.com/400/400/food/" alt="" />
                            <img src="http://lorempixel.com/400/400/animals/" alt="" />
                            <img src="http://lorempixel.com/400/400/cats/" alt="" />
                        </div>
                        <p>Stuff</p>
                    </div>
                </div>
            </div>
        </>
    );
}