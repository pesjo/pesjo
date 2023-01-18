import React from 'react';
import ProjectHeader from '../components/ProjectHeader';
import ProjectDesc from '../components/ProjectDesc';
import ProjectPic from '../components/ProjectPic';
import Tottotiphone from "./tottotiphone.png";
import Tottotprocess from "./tottotprocess.png";
import Iphone from "./tfniphone.png";




const Tottot = () => {
    return (
        <>
            <ProjectHeader
                project="tottot - question game"
                desc="Fullstack development"
                tools="CodeIgniter with php, phpMyAdmin, SQL, HTML/CSS, JavaScript"
                text="Do you and your friends talk about the same things over and over again? Let's not. Tottot is a game with questions to create discussion. Let's play!"></ProjectHeader>
            {/* <ProjectPic src={Tottotiphone}></ProjectPic> */}
            <ProjectDesc
                desc="goal for the project"
                text1="This game started of as a project for the course Databases and Web based systems. The project was to deliver a database driven webapplication, for which me and two friends decided to create this question game. "
                text2="Togehter we created the application in approximately a month. And from here and now, our ambition is to work on the UX and UI of the application."></ProjectDesc>
            <ProjectDesc
                desc="my responsibilities"
                text1="Most of my time was spent on the admin-page. Creating log-in and log-out functionality and for the admin to remove, edit and add questions to the game."></ProjectDesc>
            {/* <ProjectPic src={Tottotprocess}></ProjectPic> */}
            <ProjectDesc
                desc="the process"
                text1="As for creating the application, we started of with the flow chart. What functionality do we want in the application? What is meaingful and useful? From there, we created a ER database diagram to visualize what the database would look like. After this, we seperated the tasks and worked on different things on the website to reach our goal."
                text2="Now that the website has its functionality we are working on the UX and the UI. We started of with a session where we created seperate moodboards. What feel did we individually want for the game? From the seperated ones, we put togehter a final moodboard, which we would use. From here, protypes were and are still being created. "></ProjectDesc>
            {/* <ProjectPic src={Iphone}></ProjectPic> */}
            <ProjectDesc
                desc="the outcome"
                text1="As this project is still in the works, the outcome is hard to define. We are happy with the application itself and are excited to keep on working on the project. Stay tuned for the results, at tottot.se."></ProjectDesc>


        </>
    );
};

export default Tottot;