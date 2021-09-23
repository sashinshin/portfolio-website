import React from 'react';
import './main.css';
import githubLogo from './images/github-logo.png';
import linkedinLogo from './images/linkedin-logo.png';
import wave1 from './svg/layered-waves-haikei.svg';

const Main = () => {

    return (
        <>
        <title>
            Sasha Luhr
        </title>
        <main className="main-content">

            <header className="section">
                <h1>Sasha Luhr</h1>
                <p>Fullstack developer</p>
            </header>

            <div className="spacer layer1" /> 

            <article className="section light">
                <h2> Who am I?</h2>

                <p>
                    My name is Sasha Luhr. I'm a driven and creative developer with a passion for arts and design as well as technology and maths. 
                    I'm outgoing and social, and always looking for new challenges!
                </p>

            </article>


            <section className="section">
                <h2>Tech stack</h2>
            </section>
        </main>
        </>
    )
};

export default Main;
