import React, { useState } from "react";
import Card from "../UI/Card";
import Members from "../Wrap/data/Members";
import Profile from "./Profile";
import classes from './sass/css/Member.module.css';
import image from '../Wrap/data/Memberimg/ImageMember';


export default function Member(props) {
    const [ok, setOk] = useState(null);

    function turnOff() {
        setOk(null);
    }

    function turnOn() {
        setOk(props.id);
    }


    return (
        <>
            {ok && <Profile profile={Members[ok]} turnOff={turnOff} />}
            <Card>
                <img className={classes.img} src={image[props.id]} alt={props.name} onClick={turnOn} />
                <div className={classes.container}>
                    <h5><b>{props.name}</b></h5>
                </div>
            </Card>
        </>
    );
}