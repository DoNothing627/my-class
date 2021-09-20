import React from "react";
import Members from './data/Members';
import Member from '../Core/Member';
import Class from '../Core/Class';
import './Content.module.css';

console.log(Members);

export default function Content() {

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
                />)
            }
            <br></br>
            <Class />

        </>
    );
}
