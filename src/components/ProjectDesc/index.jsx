import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/App.css';
import useStyles from "./styles";


function ProjectHeader(props) {

    const classes = useStyles();

    return (
        <>
            <p className={classes.desc}>{props.desc}</p>
            <p className={classes.text}>{props.text1}</p>
            <p className={classes.lasttext}>{props.text2}</p>
            
        </>
    );
}

export default ProjectHeader;
