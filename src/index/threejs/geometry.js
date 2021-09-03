import * as THREE from 'three';
import moonImage from '../images/moon.jpg';
import normalImage from '../images/normal.jpg';
import me from '../images/IMG_4966.jpg';
import seth from '../images/IMG_8007.jpg';
import dreamStream from '../images/dream-stream.png';

console.log('inside gemoetry.js');

// Create torus
const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
//const material = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true});
const torusMaterial = new THREE.MeshPhongMaterial( {color: 0xFF6347});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
// torus.rotation.x = Math.PI * -0.25;

// Random stars
const addStar = (scene) => {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    
    star.position.set(x, y, z);
    scene.add(star);
    }

let moon, cube, cube2, cube3;

console.log('before condition');
console.log(typeof abb);
console.log(typeof window);
console.log(typeof document);

if (typeof window !== undefined && typeof document !== undefined) {
    console.log('in condition');
    console.log(typeof window);
    console.log(typeof document);

    let moonTexture, normalTexture;
    // The texture loader invokes the document, need workaround.
    // Simple conditional doesn't seem to work
    moonTexture = new THREE.TextureLoader().load(moonImage);
    // const normalTexture = new THREE.TextureLoader().load(normalImage);


    moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
        })
    );
    // new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})
    // );

    // Cube
    const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);

    // const meTexture = new THREE.TextureLoader().load(me);
    // const cubeMaterial = new THREE.MeshStandardMaterial({
    //     map: meTexture,
    // });

    // cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // const sethTexture = new THREE.TextureLoader().load(seth);
    // const cubeMaterial2 = new THREE.MeshStandardMaterial({
    //     map: sethTexture,
    // });
    // cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial2);

    // const dreamStreamTexture = new THREE.TextureLoader().load(dreamStream);
    // const cubeMaterial3 = new THREE.MeshStandardMaterial({
    //     map: dreamStreamTexture,
    // });
    // cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial3);

    cube = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true}));
    cube2 = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true}));
    cube3 = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true}));

}

export { torus, moon, cube, cube2, cube3, addStar };
