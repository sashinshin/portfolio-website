import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './index.css';



const IndexPage = () => {

  useEffect(() => {

    // Set scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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
    const material = new THREE.MeshStandardMaterial( {color: 0xFF6347});
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
    <div>
        <canvas id="bg">
        </canvas>

    </div>
  )
}

export default IndexPage
