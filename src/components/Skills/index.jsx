import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/components/Skills/Skills.css';
import { Link } from "react-router-dom";

function Skills(props) {


    return (
        <>
            <div className="skills_card">
                <Link to={props.link}>
                    <img src={props.src} alt="" className="img_skills"></img>
                </Link>
            </div>

        </>
    );
}

export default Skills;
