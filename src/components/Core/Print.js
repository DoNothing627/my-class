import React, { useState } from "react";
import "./sass/css/Print.css";

export default function Print(props) {

    const [ok, setOk] = useState(0);

    return (
        <>
            {ok == 1 && <Print image={props.image} id={(props.id + 1) % props.image.length} onclick={props.onclick} />}
            {ok == 2 && <Print image={props.image} id={(props.id + props.image.length - 1) % props.image.length} onclick={props.onclick} />}
            {!ok &&
                <>
                    <div className="backdrop" onClick={props.onclick} />
                    <img className="anh" src={props.image[props.id]} />
                    <div className="button-next" onClick={() => setOk(1)}>
                        {'>'}
                    </div>
                    <div className="button-prev" onClick={() => setOk(2)}>
                        {'<'}
                    </div>
                </>
            }
        </>
    );
}