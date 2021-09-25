import React from 'react';
import './main.css';
import './contact.css'
import Navbar from './navbar';
import githubLogo from './images/github-logo.png';
import linkedinLogo from './images/linkedin-logo.png';

const Contact = () => {

    return (
        <>
        <Navbar />
        <main className="main-content">

            <section className="section contact">
                <a href="https://github.com/sashinshin" target="_blank"><img src={githubLogo} /></a>
                <a href="https://www.linkedin.com/in/sashaluhr/" target="_blank"><img src={linkedinLogo} /></a>

            </section>

            <div className="bottom" />

        </main>
        </>
    )
};

export default Contact;
