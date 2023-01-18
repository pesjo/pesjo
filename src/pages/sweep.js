import React from 'react';
import ProjectHeader from '../components/ProjectHeader';
import ProjectDesc from '../components/ProjectDesc';
import ProjectPic from '../components/ProjectPic';
import ProjectPictures from '../components/ProjectPictures';
import Sweepimac from "./sweepimac.png";
import Sweepprocess from "./sweepprocess.png";
import Sweepcafe from "./sweepcafe.png";

const Sweep = () => {
    return (
        <>
            <ProjectHeader
                project="sweep.gg"
                desc="UX/UI Design"
                tools="Adobe XD, Illustrator"
                text="First off, we are gamers. With that said we know that gamers have a need for something more customized than
            regular social networks. Thats Sweep! A social network for gamers. But really, another social media platform?
            Irrelevant posts? Algorithms creating information bubbles? Cyber bullying? Selling user data?
            We say no. It’s time for something new. It’s time for users to be in control. It ́s about time gamers get
            their own social network and connect with integrity.Welcome to the Good Gaming Community. Let’s Sweep!"></ProjectHeader>
            {/* <ProjectPic src={Sweepimac}></ProjectPic> */}
            <ProjectDesc
                desc="goal for the project"
                text1="I was asked from the client to design a User Interface for the platform.The client presented me with
            somewhat of a wireframe and a specification of the functionalities to be included. "></ProjectDesc>
            <ProjectDesc
                desc="the process"
                text1="In the beginning of this project, I felt very lost to be honest. How I was going to design a platform regarding something
            I know nothing about? Gaming. A world unknown for me. So to begin, I did some research. What is the platform going to be used for?
            And how do the user want to use it?"
                text2="For 5 months, I did this as a side project to my job and my studies.
            I started of with creating new wireframes to present to the client. A starting point to get the feel for the design
            they wanted. After this, the process was iterative. I design, got input and made changes. Until the final prototype was created. "></ProjectDesc>
            {/* <ProjectPictures src={Sweepprocess}></ProjectPictures> */}
            <ProjectDesc
                desc="the outcome"
                text1="This was my first project outside of my studies. The outcome exceeded both my own and my clients expectations. As of right now, the platform has yet to be released. Stay tuned.."></ProjectDesc>
            {/* <ProjectPic src={Sweepcafe}></ProjectPic> */}



        </>
    );
};

export default Sweep;