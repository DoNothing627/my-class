import React, { useState } from "react";
import Letter from '../Core/Letter';
import Button from "../UI/Button";

export default function MainPage(props) {

    function out() {
        props.out();
    }

    return (
        <>
            <Letter />
            <Button onClick={out}>Let's reminisce</Button>
        </>
    );
}