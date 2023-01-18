import React from 'react';
import ProjectHeader from '../components/ProjectHeader';
import ProjectDesc from '../components/ProjectDesc';
import ProjectPic from '../components/ProjectPic';
import Tfrcomp from "./tfrcomp.png";
import Tfrtelefon from "./tfrtelefon.png";
import Tfrscreen from "./tfrscreen.png";
import Tfrboth from "./tfrboth.png";




const Teamf = () => {
    return (
        <>
            <ProjectHeader
                project="team folkesson racing"
                desc="UX/UI Design"
                tools="Adobe XD, Illustrator, HTML/CSS, Wordpress"
                text="Team Folkesson Racing drives sidecar cross and competes in the Swedish, Danish and Nordic championships during the 2014 season."></ProjectHeader>
            {/* <ProjectPic src={Tfrtelefon}></ProjectPic> */}
            <ProjectDesc
                desc="goal for the project"
                text1="This was a project for the class Web technology for engineers. The project was to find a website that needs improvement and implement my design suggestion."></ProjectDesc>
            {/* <ProjectPic src={Tfrscreen}></ProjectPic> */}
            <ProjectDesc
                desc="the process"
                text1="After a suitable website was found, I analyzed the target group and the purpose of the website. Based on these, 5 web guidelines were chosen to work from when creating the Lo-Fi prototype. Following this, I created a flow chart and storyboard. How will the user use this site and what functionalities are desirable? To answer these question I did User Research and Interviews. I decided what feeling I wanted the website to mediate and lastly, I created wireframes and wireframes, until I reached what I was satisfied and happy with. "
                text2="The website was then implemented 2 times, one using HTML/CSS and the second using Wordpress."></ProjectDesc>
            {/* <ProjectPic src={Tfrboth}></ProjectPic> */}
            <ProjectDesc
                desc="the outcome"
                text1="The pictures above presents the different resluts from the implementations, wordpress to the left and HTML/CSS to the right. In my opinion the outcome of the project was a success. The feel I wanted to create for the website is clear and the presentation of information is far more comprehensible."></ProjectDesc>
            {/* <ProjectPic src={Tfrcomp}></ProjectPic> */}



        </>
    );
};

export default Teamf;