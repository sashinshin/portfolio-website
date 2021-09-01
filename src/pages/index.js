import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './index.css';



const IndexPage = () => {

  useEffect(() => {

    // Set scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.setZ(30);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('bg'),
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Initial render
    renderer.render(scene, camera);

    // Create shape
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    //const material = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true});
    const material = new THREE.MeshPhongMaterial( {color: 0xFF6347});
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus)

    // Create light
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20)
    
    const ambientLight = new THREE.AmbientLight(0xffffff);
    
    scene.add(pointLight, ambientLight);

    // Dev tools
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    console.log(pointLight);
    console.log(lightHelper);
    scene.add(lightHelper, gridHelper);

    // Orbit control
    const controls = new OrbitControls(camera, renderer.domElement);

    // Random stars
    const addStar = () => {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshBasicMaterial({color: 0xffffff});
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      
      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill().forEach(addStar);

    // Control camera on scroll
    // const moveCamera = () => {
    //   const t = document.body.getBoundingClientRect().top;

    //   // Rotate objects here

    //   camera.position.z = t * -0.01;
    //   camera.position.x = t * -0.0002;
    //   camera.rotation.y = t * -0.0002;

    // }

    // document.body.onscroll = moveCamera;

    // Update scene
    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      controls.update();

      renderer.render(scene, camera);
    }

    animate();


      
  }, [])


  return (
    <>
    <head>
      <title>
        Portfolio
      </title>
    </head>
      <body>
        <canvas id="bg">
        </canvas>
        <main>
          <header>
            <h1>Sashas portfolio</h1>
            <p>Coming soon...</p>
          </header>

          <h1>HTML Ipsum Presents</h1>

				<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

				<h2>Header Level 2</h2>

				<ol>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ol>

				<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

				<h3>Header Level 3</h3>

				<ul>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ul>

        </main>

      </body>

    </>
  )
}

export default IndexPage
