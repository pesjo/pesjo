import React from 'react';
import Me from '../components/Me'
import Skills from '../components/Skills';
import Sweep from "./sweep2.png";
import Tottot from "./tottot3.png";
import Tfr from "./teamfolkesson.png";
import Portfolio from "./portfolio.png";
import Myskills from "../components/Myskills";
import Construction from "../components/Construction"




const Home = () => {

    return (
        <div style={{ backgroundColor: '#131515' }}>

            {/* <Me></Me>
            <Skills link="./sweep" src={Sweep}></Skills>
            <Skills link="./tottot" src={Tottot}></Skills>
            <Skills link="./teamf" src={Tfr}></Skills>
            <Skills link="./portfolio" src={Portfolio}></Skills> */}
            <Construction></Construction>



        </div>
    );
};

export default Home;