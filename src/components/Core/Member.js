import React, { useState } from "react";
import Card from "../UI/Card";
import Profiles from "../Wrap/data/Profiles";
import Profile from "./Profile";
import classes from './sass/css/Member.module.css';

console.log(Profiles);

export default function Member(props) {
    const [ok, setOk] = useState(null);

    function turnOff() {
        setOk(null);
        props.turnOff();
    }

    function turnOn() {
        setOk(props.id);
        props.turnOn();
    }

    return (
        <>
            {ok && <Profile profile={Profiles[ok]} turnOff={turnOff} />}
            <Card>
                <img className={classes.img} src={props.img} alt="Avatar" onClick={turnOn} />
                <div className={classes.container}>
                    <h4><b>{props.name}</b></h4>
                </div>
            </Card>
        </>
    );
}