import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/components/Footer/style.css';
import useStyles from "./styles";
import { RiLinkedinBoxLine, RiMailLine } from 'react-icons/ri'


function Footer() {
    const classes = useStyles();

    return (
        <>
            <hr />
            <div className="main-footer">

                <div className="container">

                    <div className="row">

                        <div className="col">
                            <ul className="list-unstyles">
                                {/* <a className="iconfooter" href="https://www.linkedin.com/in/pernilla-sjöberg-5119721ab" target="_blank" rel="noreferrer">
                                    <RiLinkedinBoxLine size="4em" />
                                </a>
                                <a className="iconfooter" href="mailto:pernillasjoeberg@hotmail.se">
                                    <RiMailLine size="4em" />
                                </a> */}
                                <p className={classes.font}>P.S lets stay in contact</p>
                                <p className={classes.font}>pernillasjoeberg@hotmail.se</p>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Footer;
