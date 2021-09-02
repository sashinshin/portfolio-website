import * as THREE from 'three';
import moonImage from '../images/moon.jpg';
import normalImage from '../images/normal.jpg'

if (typeof document !== undefined) {
    // Create torus
    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    //const material = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true});
    const torusMaterial = new THREE.MeshPhongMaterial( {color: 0xFF6347});
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    
    // Random stars
    const addStar = (scene) => {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshBasicMaterial({color: 0xffffff});
        const star = new THREE.Mesh(geometry, material);
    
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
        
        star.position.set(x, y, z);
        scene.add(star);
      }
    
    const moonTexture = new THREE.TextureLoader().load(moonImage);
    const normalTexture = new THREE.TextureLoader().load(normalImage);
    
    const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
        })
    );
}


export { torus, addStar, moon };