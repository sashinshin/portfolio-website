import React from 'react';
import './main.css';
import App from './threejs/App';
import githubLogo from './images/github-logo.png'
import linkedinLogo from './images/linkedin-logo.png'

const Main = () => {

    return (
        <>
        <title>
            Sasha Luhr
        </title>
        <App />
        <main className="main-content">
            <nav> 
                <ul className="nav">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact me</a>
                    </li>
                </ul>

                <div class="links">
                    <a href="https://www.linkedin.com/in/sashaluhr/" target="_blank">
                        <img src={linkedinLogo} width="40"/>
                    </a>
                    <a href="https://github.com/sashinshin" target="_blank">
                        <img src={githubLogo} width="40"/>
                    </a>
                </div>
            </nav>

            <header className="name">
                <h1>Sasha Luhr</h1>
            </header>

            <h1 className="title" id="about">About</h1>

            <article class="left">
                <h2> Who am I?</h2>

                <p>
                    My name is Sasha Luhr. I'm a driven and creative developer with a passion for arts and design as well as technology and maths. 
                    I'm outgoing and social, and always looking for new challenges!
                </p>

            </article>

            <h1 className="title" id="projects">Portfolio</h1>

            <article className="light left">
                <h3><a href="https://dream-stream.netlify.app/" target="_blank">DreamStream</a></h3>
                <p>
                    DreamStream is an image sharing social media website created by me, Max Anderberg, Amund Ring and Konstantinos Dimtrakopoulus. It has all the features you would want including making posts, liking them, commenting and more!
                    The app was created using GatsbyJS and the JAM stack. It is hosted on Netlify and uses a CI/CD pipeline. The backend is completely serverless, and instead relies on Netlify's serverless functions that, with the help of GraphQL, connect it
                    to FaunaDB.
                </p>
            </article>

            <article className="light">
                <h3><a href="http://workout-app-hackday.herokuapp.com/" target="_blank">Workout tracker</a></h3>
                <p>
                    The workout tracker was made in one day as a hackday project. It lets you create exercises that you assemble into a workout complete with customizable reps, sets and weight. Your completed workouts are saved along with time and date.
                    The workout tracker is created using a React frontend and an Express backend.
                </p>
            </article>

            <article className="light left">
                <h3><a href="todo" target="_blank">Todo list</a></h3>
                <p>
                    My first React application! A todo list where you can add, mark and remove items.
                </p>
            </article>

            <h1 className="title" id="contact">Contact me</h1>
                <footer className="contact">
                    <ul className="contact__list"> 
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="40" />
                                sasha.luhr@gmail.com
                        </li>
                        <li>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_503524.png" width="40" />
                                +46 76 56 801 04
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ei-location.svg/2048px-Ei-location.svg.png" width="45" />
                                Stockholm
                        </li>
                    </ul>

                </footer>

        </main>
        </>
    )
};

export default Main;
