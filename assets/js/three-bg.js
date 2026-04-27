/* 
  QUANTUM THEME - 3D BACKGROUND LOGIC
  - Blue Matrix Digital Rain Effect
  - Reactive to Window Resize
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

// --- MATRIX RAIN SETUP ---
const particlesGeometry = new THREE.BufferGeometry();
const count = 6000; // Dense rain

const positions = new Float32Array(count * 3);

for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 150; // Spread wide
    positions[i3 + 1] = Math.random() * 100 - 50; // Spread vertically
    positions[i3 + 2] = (Math.random() - 0.5) * 50; // Depth
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
    color: 0x00aaff, // Matrix Blue
    size: 0.15,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Camera Position
camera.position.z = 30;

// --- ANIMATION LOOP ---
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();

    const positions = particles.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Falling motion
        positions[i3 + 1] -= 0.15 + (Math.random() * 0.05); // Variable fall speed

        // Reset to top when it goes below view
        if (positions[i3 + 1] < -50) {
            positions[i3 + 1] = 50;
            positions[i3] = (Math.random() - 0.5) * 150; // Randomize horizontal on reset
        }
    }

    particles.geometry.attributes.position.needsUpdate = true;

    // Subtle camera tilt
    camera.position.x += (Math.sin(elapsedTime * 0.5) * 0.05);
    camera.lookAt(scene.position);

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
