import React from "react";
import classes from "./sass/css/Profile.module.css";
export default function Profile(props) {

    console.log(props);
    return (
        <>
            <div className={classes.backdrop} onClick={props.turnOff}>
                <div className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.profile.name}</h2>
                    </header>
                    <div className={classes.content}>
                        <h4>{props.profile.born}</h4>
                        <h4>{props.profile.quotes}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}