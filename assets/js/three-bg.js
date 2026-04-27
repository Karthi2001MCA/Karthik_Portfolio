/* 
  QUANTUM THEME - 3D BACKGROUND LOGIC
  - Floating Blue "Matter" (Cubes) Animation
  - High Performance Instanced Rendering
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

// --- FLOATING MATTER SETUP ---
const cubeCount = 400;
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({
    color: 0x00aaff,
    transparent: true,
    opacity: 0.6,
    shininess: 100
});

// Using InstancedMesh for efficiency
const mesh = new THREE.InstancedMesh(geometry, material, cubeCount);
scene.add(mesh);

// Lighting for the cubes
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x14d4ff, 2);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const dummy = new THREE.Object3D();
const cubes = [];

for (let i = 0; i < cubeCount; i++) {
    cubes.push({
        position: new THREE.Vector3(
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100
        ),
        rotation: new THREE.Euler(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        ),
        scale: Math.random() * 0.5 + 0.1,
        velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1
        )
    });
}

// Camera Position
camera.position.z = 50;

// --- ANIMATION LOOP ---
const clock = new THREE.Clock();

function animate() {
    const time = clock.getElapsedTime();

    for (let i = 0; i < cubeCount; i++) {
        const cube = cubes[i];
        
        // Move
        cube.position.add(cube.velocity);
        
        // Rotate
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Bounds check
        if (Math.abs(cube.position.x) > 60) cube.position.x *= -0.9;
        if (Math.abs(cube.position.y) > 60) cube.position.y *= -0.9;
        if (Math.abs(cube.position.z) > 60) cube.position.z *= -0.9;

        dummy.position.copy(cube.position);
        dummy.rotation.copy(cube.rotation);
        dummy.scale.set(cube.scale, cube.scale, cube.scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
    }
    
    mesh.instanceMatrix.needsUpdate = true;
    
    // Smooth camera motion
    camera.position.x += (Math.sin(time * 0.2) * 0.1);
    camera.position.y += (Math.cos(time * 0.2) * 0.1);
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
