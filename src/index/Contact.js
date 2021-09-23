import React from 'react';
import './main.css';
import githubLogo from './images/github-logo.png';
import linkedinLogo from './images/linkedin-logo.png';

import blob from './svg/blob1.svg'

const Contact = () => {

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

            <div className="spacer layer2" /> 

            <section className="section">
                <h2>Tech stack</h2>
            </section>

            <div className="spacer layer1" /> 

            <article className="section light">
                <svg 
                id="visual" 
                viewBox="0 0 960 300" 
                width="960" 
                height="300" 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1">
                    <g transform="translate(489.2773591020872 151.98731467926876)">
                        <path id="blob1" d="M72.9 -106.2C91 -87.3 99.7 -61.2 100.9 -37.5C102.1 -13.8 95.7 7.6 91.3 32.2C86.8 56.8 84.3 84.7 69.4 102.3C54.5 120 27.2 127.5 -1.1 129C-29.4 130.5 -58.8 125.9 -81.3 110.7C-103.8 95.5 -119.4 69.7 -119.6 44.7C-119.8 19.6 -104.5 -4.7 -92 -25.9C-79.6 -47.1 -70.1 -65.2 -55.2 -85.2C-40.4 -105.2 -20.2 -127.1 3.6 -132.1C27.4 -137.1 54.9 -125.2 72.9 -106.2" fill="#001220"></path>
                    </g>
                    <g transform="translate(483.01120526156905 154.1118923543279)">
                        <path id="blob2" d="M57.7 -76.9C78.6 -64.2 102.1 -52.5 110.9 -34C119.8 -15.5 114.1 9.9 104.1 31.7C94 53.4 79.6 71.6 61.6 83.9C43.5 96.2 21.7 102.6 -2.5 106.1C-26.8 109.6 -53.7 110.2 -75.9 99.3C-98.1 88.3 -115.6 65.8 -120.1 41.5C-124.6 17.2 -116 -8.9 -108.5 -36.3C-101 -63.7 -94.6 -92.5 -76.7 -106.2C-58.8 -119.9 -29.4 -118.5 -5.5 -110.9C18.4 -103.3 36.7 -89.6 57.7 -76.9" fill="#001220"></path></g>
                </svg>
                <p>blob</p>
            </article>

        </main>
        </>
    )
};

export default Contact;
