import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/components/ProjectPic/styles.css';

function ProjectPic(props) {

    return (
        <>
            <div className="picture_card">
                <img src={props.src} className="project_img" alt="img_project"></img>
            </div>

        
        </>
    );
}

export default ProjectPic;
