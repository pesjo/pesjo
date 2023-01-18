import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/App.css';
import useStyles from "./styles";
import Typical from 'react-typical';
import jag from '/Users/pernilla/Documents/portfolio/portfolio/src/components/Me/jag.png';


function Me() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <p className={classes.nice}>nice to meet you.</p>
                <p className={classes.name}>I'm
                <span style={{ color: '#FBF8CC' }}> p</span>
                    <span style={{ color: '#FFC8DD' }}>e</span>rnilla
                <span style={{ color: '#CDB4DB' }}> s</span>
                    <span style={{ color: '#BDE0FE' }}>j</span>
                    <span style={{ color: '#B9FBC0' }}>ö</span>berg.</p>
                <Typical
                    className={classes.info}
                    loop={1}
                    steps={['Student..', 2000, 'UX Designer..', 2000, 'Interaction technology..']}>
                </Typical>
                <img src={jag} style={{ width: '30%' }} />
            </div>
        </>
    );
}

export default Me;
