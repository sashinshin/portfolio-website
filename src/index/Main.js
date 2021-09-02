import React from 'react';
import './main.css';
import App from './threejs/App';

const Main = () => {

    const list = Array(100).fill('Lorem ipsum dolor sit amet, consectetuer adipiscing elit.');
    console.log(list);

    return (
        <>
        <title>
                Portfolio
        </title>
        <App />
          <main>

          <header>
            <h1>Sashas portfolio</h1>
            <ul>
              <li><a href="todo" target="_blank">Todo App</a></li>
            </ul>
            <p>More coming soon...</p>
          </header>

          <h1>HTML Ipsum Presents</h1>

				<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
         <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. 
          in turpis pulvinar facilisis. Ut felis.</p>

				<h2>Header Level 2</h2>

				<ul>
				   {list.map((a)=> <li>{a}</li>)}
				</ul>

				<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

				<h3>Header Level 3</h3>

				<ul>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ul>

        </main>
        </>
    )
};

export default Main;
