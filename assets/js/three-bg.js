/* 
  QUANTUM THEME - 3D BACKGROUND LOGIC
  - Glowing Floating Wireframe Matter
  - Interactive & Futuristic
*/
const canvas = document.querySelector('#bg-canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// --- FLOATING WIREFRAME MATTER SETUP ---
const cubeCount = 500;
const group = new THREE.Group();
scene.add(group);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0x00aaff,
    wireframe: true,
    transparent: true,
    opacity: 0.4
});

const cubes = [];

for (let i = 0; i < cubeCount; i++) {
    const cube = new THREE.Mesh(geometry, material);
    
    cube.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150
    );
    
    cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    );
    
    const s = Math.random() * 2 + 0.5;
    cube.scale.set(s, s, s);
    
    cube.userData = {
        velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.05,
            (Math.random() - 0.5) * 0.05,
            (Math.random() - 0.5) * 0.05
        ),
        rotSpeed: new THREE.Vector3(
            Math.random() * 0.02,
            Math.random() * 0.02,
            Math.random() * 0.02
        )
    };
    
    group.add(cube);
    cubes.push(cube);
}

// Lighting (Scene depth)
const pointLight = new THREE.PointLight(0x00aaff, 2, 200);
scene.add(pointLight);

camera.position.z = 80;

// --- INTERACTION ---
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
});

// --- ANIMATION ---
const clock = new THREE.Clock();

function animate() {
    const time = clock.getElapsedTime();

    cubes.forEach(cube => {
        cube.position.add(cube.userData.velocity);
        cube.rotation.x += cube.userData.rotSpeed.x;
        cube.rotation.y += cube.userData.rotSpeed.y;

        // Bounds wrap around
        if (Math.abs(cube.position.x) > 100) cube.position.x *= -0.95;
        if (Math.abs(cube.position.y) > 100) cube.position.y *= -0.95;
        if (Math.abs(cube.position.z) > 100) cube.position.z *= -0.95;
    });

    // Parallax and rotation
    group.rotation.y += 0.001;
    group.position.x += (mouseX - group.position.x) * 0.05;
    group.position.y += (-mouseY - group.position.y) * 0.05;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
