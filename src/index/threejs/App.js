import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { torus, addStar, moon, cube, cube2, cube3 } from './geometry';



const App = () => {

  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {

      // Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);
      
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('bg'),
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      //camera.position.setZ(30);
      //camera.position.setX(-3);
      camera.position.setY(3);

      renderer.render(scene, camera);

      // Add geometry
      // scene.add(torus);
      // torus.position.setZ(-40);
      
      // scene.add(moon);
      // moon.position.z = -20;
      // moon.position.setX(-10);

      scene.add(cube);
      cube.position.setZ(-6);
      cube.position.setX(4);
      cube.position.setY(3)

      scene.add(cube2);
      cube2.position.setZ(2);
      cube2.position.setX(-3);
      cube2.position.setY(3)

      scene.add(cube3);
      cube3.position.setZ(26);
      cube3.position.setX(4);
      cube3.position.setY(3)

      Array(200).fill().forEach(() => addStar(scene));

      // Create light
      const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(20, 20, 20)
    
      const ambientLight = new THREE.AmbientLight(0xffffff);
      
      scene.add(pointLight, ambientLight);

      // // Dev tools
      // const lightHelper = new THREE.PointLightHelper(pointLight);
      // scene.add(lightHelper);

      // const gridHelper = new THREE.GridHelper(200, 50);
      // scene.add(gridHelper);

  
      // Window resize
      window.addEventListener('resize', () => {
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });


      // Control camera on scroll
      const moveCamera = () => {
        const t = document.body.getBoundingClientRect().top;
        moon.rotation.x += 0.05;
        // moon.rotation.y += 0.075;
        // moon.rotation.z += 0.05;

        // Rotate objects here

        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.rotation.y = t * 0.0002;

      }

      document.body.onscroll = moveCamera;
      moveCamera();


      // Orbit control
      // const controls = new OrbitControls(camera, renderer.domElement);

      const slowRotation = (mesh) => {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.001;
        mesh.rotation.z += 0.005;
      }

      // Update scene
      const animate = () => {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;

        // controls.update();
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.001;
        // cube.rotation.z += 0.005;
        slowRotation(cube);
        slowRotation(cube2);
        slowRotation(cube3);

        moon.rotation.x += 0.005;

        renderer.render(scene, camera);
      }

      animate();

    }
      
  }, [])

  return (
    <canvas id="bg"></canvas>
  );
}

export default App
