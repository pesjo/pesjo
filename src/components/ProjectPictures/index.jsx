import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/components/ProjectPictures/styles.css';
import Sweep1 from "./sweep2.1.png";
import Sweep2 from "./sweep2.2.png";

function ProjectPictures(props) {

    return (
        <>
            <div className="picture_card">
                <img src={props.src} className="src1" alt="first"></img>
                <img src={Sweep1} alt="first" className="src2"></img>
                <img src={Sweep2} alt="first" className="src3"></img>

            </div>

        
        </>
    );
}

export default ProjectPictures;
