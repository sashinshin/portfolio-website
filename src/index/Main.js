import React from 'react';
import './main.css';
import App from './threejs/App';

const Main = () => {
    return (
        <>
        <title>
            Sasha Luhr
        </title>
        <App />
        <main>

            <header>
                <h1>Sasha Luhr</h1>
            </header>

            <h1 className="title">About</h1>

            <article class="left">
                <h2> Who am I?</h2>

                <h3>Start</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                <h3>Mid</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                <h3>End</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

            </article>

            <h1 className="title">Projects</h1>

            <article>
                <h3><a href="https://dream-stream.netlify.app/" target="_blank">DreamStream</a></h3>
                <p>
                    DreamStream is an image sharing social media website created by me, Max Anderberg, Amund Ring and Konstantinos Dimtrakopoulus. It has all the features you would want including making posts, liking them, commenting and more!
                    The app was created using GatsbyJS and the JAM stack.
                </p>
            </article>

            <article className="light left">
                <h3><a href="todo" target="_blank">Todo list</a></h3>
                <p>
                    A todo list created in ReactJS. 
                </p>
            </article>

            <article className="light">
                <h3><a href="http://workout-app-hackday.herokuapp.com/" target="_blank">Workout tracker</a></h3>
                <p>
                    Workout tracker.
                </p>
            </article>

            <h1 className="title">Contact me</h1>


        </main>
        </>
    )
};

export default Main;
