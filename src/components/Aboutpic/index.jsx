import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/components/Aboutpic/styles.css'
import useStyles from "./style";
import Jag from "./jag.jpg";

function Aboutpic() {
    const classes = useStyles();

    return (
        <>
            <div className="about_pic">
                <div className="text">
                    <p className={classes.font}>nice to meet you.</p>
                    <p className={classes.text}>I am currently living in Umeå, where I am getting my
                    Masters in Interaction Technology and Design at Umeå University. My studies began with little to no knowledge
                    or experience regarding design, but each day I learn and my passion for designing and creating
                    experiences grows.
                    </p>
                </div>
                <div className="picture">
                    <img src={Jag} className="img" alt="me"></img>
                </div>



            </div>
        </>

    );
}

export default Aboutpic;
