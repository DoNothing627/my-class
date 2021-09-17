import React, { useState } from "react";
import Members from './data/Members';
import Memory from "./data/Memory";
import Member from '../Core/Member';
import Class from '../Core/Class';
import Test from "../Core/Test";
import './Content.module.css';

console.log(Members);

export default function Content() {

    const [show, setShow] = useState(1);

    return (
        <>
            <h1 className="container">#Members</h1>
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
            <br></br>
            {
                show != 0 && Memory.map(element =>
                    <Class />)
            }
            {/* <Test /> */}
        </>
    );
}