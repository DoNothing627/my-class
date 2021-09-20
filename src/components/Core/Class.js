import React, { useState } from "react";
import './sass/css/Class.css';
import Print from "./Print";

import presentDay from '../Wrap/data/chúng ta của sau này/PresentDay';
import couple from '../Wrap/data/couple/ImageCouple';
import together from '../Wrap/data/cùng nhau/ImageTogether';
import group from '../Wrap/data/group/ImagesGroup';
import animal from '../Wrap/data/lạc thú/ImagesAnimal';
import beauty from '../Wrap/data/xinh nè mn/ImagesBeauty';
import memories from '../Wrap/data/thứ giết chết chúng ta chính là kỉ niệm/Memories';

const Image = [
    together, group, couple, animal, beauty, memories, presentDay
]

console.log(together.length)

export default function Class() {

    const [ok, setOk] = useState(7);

    function onclick() {
        setOk(7);
    }

    return (
        <>

            {ok != 7 && <Print image={Image[ok]} id={0} onclick={onclick} />}
            <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
            <br />
            <h1>#Moments</h1>
            <div id="main" className="container">
                <div id="gallery" className="row">
                    <div className="col-xs-4 gallery-item" onClick={() => { setOk(0) }}>
                        <div className="album">
                            <img src={together[8]} alt="" />
                            <img src={together[2]} alt="" />
                            <img src={together[5]} alt="" />
                        </div>
                        <p>Ấm áp tình thân</p>
                    </div>
                    <div className="col-xs-4 gallery-item" onClick={() => { setOk(1) }}>
                        <div className="album">
                            <img src={group[3]} alt="" />
                            <img src={group[10]} alt="" />
                            <img src={group[8]} alt="" />
                        </div>
                        <p>Chia bè kéo cánh :)))</p>
                    </div>
                    <div className="col-xs-4 gallery-item" onClick={() => { setOk(2) }}>
                        <div className="album">
                            <img src={couple[0]} alt="" />
                            <img src={couple[23]} alt="" />
                            <img src={couple[8]} alt="" />
                        </div>
                        <p>Đôi bạn cùng tiến</p>
                    </div>
                    <div className="col-xs-4 gallery-item" onClick={() => { setOk(3) }}>
                        <div className="album">
                            <img src={animal[1]} alt="" />
                            <img src={animal[4]} alt="" />
                            <img src={animal[7]} alt="" />
                        </div>
                        <p>Lạc thú</p>
                    </div>
                    <div className="col-xs-4 gallery-item" onClick={() => { setOk(4) }}>
                        <div className="album">
                            <img src={beauty[4]} alt="" />
                            <img src={beauty[1]} alt="" />
                            <img src={beauty[20]} alt="" />
                        </div>
                        <p>Xinh nè các bạn</p>
                    </div>
                    <div className="col-xs-4 gallery-item" onClick={() => { setOk(5) }}>
                        <div className="album">
                            <img src={memories[23]} alt="" />
                            <img src={memories[34]} alt="" />
                            <img src={memories[5]} alt="" />
                        </div>
                        <p>Thứ giết chết chúng ta chính là kỉ niệm :(((</p>
                    </div>
                    <div className="col-xs-4 gallery-item" onClick={() => { setOk(6) }}>
                        <div className="album">
                            <img src={presentDay[8]} alt="" />
                            <img src={presentDay[37]} alt="" />
                            <img src={presentDay[27]} alt="" />
                        </div>
                        <p>Chúng ta của sau này</p>
                    </div>
                </div>
            </div>

        </>
    );
}