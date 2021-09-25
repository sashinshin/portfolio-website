import React from 'react';
import './main.css';
import './portfolio.css';
import Navbar from './Navbar.js';
import githubLogo from './images/github-logo.png';
import linkedinLogo from './images/linkedin-logo.png';
import dreamStream from './images/dream-stream.png';
import workoutApp from './images/workout-app.png';
import todoList from './images/todolist.png';


import blob from './svg/blob1.svg'

const Portfolio = () => {

    return (
        <>
        <Navbar/>
        <main className="main-content">

            <article className="section project">

                <a href="https://dream-stream.netlify.app/" target="_blank"><img className="demo_image" src={dreamStream} alt="DreamStream screenshot"/></a>
                <div className="project__description">
                    <h3> DreamStream </h3>
                    <p>
                        DreamStream is an image sharing social media website created by me, Max Anderberg, Amund Ring and Konstantinos Dimtrakopoulus. It has all the features you would want including making posts, liking them, commenting and more!
                        <br />
                        <br />
                        The app was created using GatsbyJS and the JAM stack. It is hosted on Netlify and uses a CI/CD pipeline. The backend is completely serverless, and instead relies on Netlify's serverless functions that, with the help of GraphQL, connect it
                        to FaunaDB.
                    </p>
                    <a href="https://github.com/Mob-the-Builders/dream-stream" target="_blank"><img className="github_image project__github" src={githubLogo} alt="Github logo"/></a>
                </div>

            </article>

            <div className="spacer layer1" /> 

            <article className="section light project">

                <a href="http://workout-app-hackday.herokuapp.com/" target="_blank"><img className="demo_image" src={workoutApp} alt="Workout app screenshot"/></a>
                <div className="project__description">
                    <h3> Workout Tracker </h3>
                    <p>
                        This workout tracker was made in one day as a hackday project. It lets you create exercises that you assemble into a workout complete with customizable reps, sets and weight. Your completed workouts are saved along with time and date.
                        <br />
                        <br />
                        It uses a React frontend and an Express backend.
                    </p>
                    <a href="https://github.com/sashinshin/workout-app" target="_blank"><img className="github_image project__github" src={githubLogo} alt="Github logo"/></a>
                </div>

            </article>

            <div className="spacer layer2" /> 

            <article className="section project">

                <a href="/todo" target="_blank"><img className="demo_image" src={todoList} alt="To do list screenshot"/></a>
                <div className="project__description">
                    <h3> Todo list </h3>
                    <p>
                        My first React application! A todo list where you can add, mark and remove items.
                        <br />
                        <br />
                        Created in react.
                    </p>
                    <a href="https://github.com/sashinshin/todo-react" target="_blank"><img className="github_image project__github" src={githubLogo} alt="Github logo"/></a>
                </div>

            </article>


        </main>
        </>
    )
};

export default Portfolio;
