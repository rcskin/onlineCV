import React from "react";
import Photo from "./profile-pic.jpeg";
import './App.css';

function CV () {
    return (
        <div className='cv'>
            <div className="cv-header">
                <img src={Photo} alt="Profile pic" />
                <h1>Rachel Skinner</h1>
                <p>Full-Stack Developer</p>
            </div>
            <div className="cv-body">
                <div className="cv-skills">
                    <h2>Skills</h2>
                    <ul className="front-end"> 
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <ul className="back-end">
                        <li>Node</li>
                        <li>Git</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                    </ul>
                </div>
                <div className="cv-projects">
                    <h2>Projects</h2>
                    <h3>Hobby Website</h3>
                        <p>Using HTML, CSS, and JavaScript, I made a website highlighting a passion and hobby of mine - Singing!
                        The website has images, tables of information, contact information for choirs and my contact information. 
                        It also included fucntional 'like' buttons, and the capability for sections to be 'saved for later' with thetouch of a button.
                        Those items were displayed on a new page linked in the website to easily access what the user wanted to come back to. 
                        </p>
                    <h3>Chuck Norris Joke Generator</h3>
                        <p>This fun project was based primarily on the use of APIs and fetching common and hilarious Chuck Norris Jokes.
                        The user can easily refresh the page and a new joke was generated. I also styled the page using CSS in an
                        ultra-American style as Chuck Norris is the Ultimate American!  
                        </p>
                    <h3>Shopping Page</h3>
                        <p>One of my first larger websites was a test of our use of Bootstrap to create and style a shopping page.
                         It involved learning and using the grid system to provide an aesthetically pleasing and responsive page. 
                         The images were made responsive when hovering over the images, I made use of Bootstrap buttons and learned how
                         to make forms to get contact details of the user.     
                        </p>
                </div>
                <div className="cv-education">
                    <h2>Education</h2>
                    <h3>HyperionDev</h3>
                    <p>Full Stack Web Developer Bootcamp, 2023</p>
                    <h3>University of Otago</h3>
                    <p>Graduate Diploma in Science Education, 2011</p>
                    <h3>University of Lethbridge</h3>
                    <p>BSc General Sciences: Mathematics, Chemistry and Biology, 2009</p>
                </div>
            </div>


        </div>
    );
}

export default CV;