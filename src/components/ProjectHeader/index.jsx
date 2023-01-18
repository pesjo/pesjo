import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/App.css';
import useStyles from "./styles";


function ProjectHeader(props) {

    const classes = useStyles();

    return (
        <>
            <p className={classes.name}>{props.project}</p>
            <p className={classes.desc}>{props.desc}</p>
            <p className={classes.tools}>Tools: {props.tools}</p>
            <p className={classes.info}>{props.text}</p>
            
        </>
    );
}

export default ProjectHeader;
