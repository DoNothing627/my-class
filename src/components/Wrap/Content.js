import React, { useState } from "react";
import Members from './data/Members';
import Memory from "./data/Memory";
import Member from '../Core/Member';
import Class from '../Core/Class';
import End from "../Core/End";
import './Content.module.css';

console.log(Members);

export default function Content() {

    const [show, setShow] = useState(1);

    return (
        <>
            <h1>#Members</h1>
            {Members.map(element =>
                <Member
                    id={element.id}
                    name={element.name}
                    fb={element.fb}
                    img={element.img}
                    key={element.id}
                    turnOff={() => setShow(1)}
                    turnOn={() => setShow(0)}
                />)
            }
            {
                show != 0 && Memory.map(element =>
                    <Class />)
            }

            <End />

        </>
    );
}