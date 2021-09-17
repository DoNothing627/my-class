import React, { useState } from "react";
import Card from "../UI/Card";
import Profiles from "../Wrap/data/Profiles";
import Profile from "./Profile";
import classes from './sass/css/Member.module.css';
import image from '../Wrap/data/Memberimg/ImageMember';
//import anh from './Memberimg/1.jpg';



console.log(Profiles);

export default function Member(props) {
    //import anh from './Memberimg/1.jpg';
    const [ok, setOk] = useState(null);

    function turnOff() {
        setOk(null);
        props.turnOff();
    }

    function turnOn() {
        setOk(props.id);
        props.turnOn();
    }

    console.log(props.img);

    return (
        <>
            {ok && <Profile profile={Profiles[ok]} turnOff={turnOff} />}
            <Card>
                <img className={classes.img} src={image[props.id]} alt="Avatar" onClick={turnOn} />
                <div className={classes.container}>
                    <h3><b>{props.name}</b></h3>
                </div>
            </Card>
            {/* <div className={styles.card}>
                <div style={{ backgroundImage: `url("${image[props.id]}}")` }} alt="avatar" />
                <h4>{props.name}</h4>
            </div> */}
        </>
    );
}