import React from 'react'
import '../Myskills/myskills.css';
import useStyles from "./styles";
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'




function Myskills(props) {

    const classes = useStyles();

    return (
        <>
            <div className="my_card">
                <p className={classes.font}>skills</p>
                <div className="icons">
                    <FaReact className="icon"></FaReact>
                    <FaHtml5 className="icon"></FaHtml5>
                    <FaCss3Alt className="icon"></FaCss3Alt>
                    <FaJava className="icon"></FaJava>
                    <IoLogoJavascript className="icon"></IoLogoJavascript>
                    <GrMysql className="icon"></GrMysql>
                    <SiAdobeillustrator className="icon"></SiAdobeillustrator>
                    <FaNodeJs className="icon"></FaNodeJs>
                    <SiAdobexd className="icon"></SiAdobexd>
                    <SiAdobephotoshop className="icon" ></SiAdobephotoshop>
                </div>
            </div>

        </>
    );
}

export default Myskills;
