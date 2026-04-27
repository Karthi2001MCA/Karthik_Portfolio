/* 
  QUANTUM THEME - 3D BACKGROUND LOGIC
  - Neural Constellation Animation (Connected Nodes)
  - Interactive & Futuristic
*/
const canvas = document.querySelector('#bg-canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// --- SETTINGS ---
const particleCount = 200;
const maxDistance = 150;
const nodes = [];

// --- NODE GROUP ---
const group = new THREE.Group();
scene.add(group);

// --- GEOMETRY & MATERIALS ---
const particlesGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);

const lineGeometry = new THREE.BufferGeometry();
const linePositions = new Float32Array(particleCount * particleCount * 3);
const lineColors = new Float32Array(particleCount * particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.5) * 800;
    const z = (Math.random() - 0.5) * 800;

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    nodes.push({
        x, y, z,
        velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5
        )
    });
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));

const particlesMaterial = new THREE.PointsMaterial({
    color: 0x00aaff,
    size: 4,
    blending: THREE.AdditiveBlending,
    transparent: true,
    sizeAttenuation: true
});

const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
group.add(particleSystem);

const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.5
});

const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
group.add(lineMesh);

// --- INTERACTION ---
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2);
});

// --- ANIMATION ---
const clock = new THREE.Clock();

function animate() {
    const time = clock.getElapsedTime();

    let vertexIdx = 0;
    let colorIdx = 0;
    let lineCount = 0;

    for (let i = 0; i < particleCount; i++) {
        const node = nodes[i];

        // Movement
        node.x += node.velocity.x;
        node.y += node.velocity.y;
        node.z += node.velocity.z;

        // Bounce
        if (node.x < -400 || node.x > 400) node.velocity.x *= -1;
        if (node.y < -400 || node.y > 400) node.velocity.y *= -1;
        if (node.z < -400 || node.z > 400) node.velocity.z *= -1;

        particlePositions[i * 3] = node.x;
        particlePositions[i * 3 + 1] = node.y;
        particlePositions[i * 3 + 2] = node.z;

        // Check distances for lines
        for (let j = i + 1; j < particleCount; j++) {
            const node2 = nodes[j];
            const dx = node.x - node2.x;
            const dy = node.y - node2.y;
            const dz = node.z - node2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDistance) {
                const alpha = 1.0 - dist / maxDistance;

                linePositions[vertexIdx++] = node.x;
                linePositions[vertexIdx++] = node.y;
                linePositions[vertexIdx++] = node.z;

                linePositions[vertexIdx++] = node2.x;
                linePositions[vertexIdx++] = node2.y;
                linePositions[vertexIdx++] = node2.z;

                // Blue to Cyan gradient lines
                lineColors[colorIdx++] = 0.0; // R
                lineColors[colorIdx++] = 0.6 * alpha; // G
                lineColors[colorIdx++] = 1.0 * alpha; // B

                lineColors[colorIdx++] = 0.0;
                lineColors[colorIdx++] = 1.0 * alpha;
                lineColors[colorIdx++] = 1.0 * alpha;

                lineCount++;
            }
        }
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    lineMesh.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, vertexIdx), 3));
    lineMesh.geometry.setAttribute('color', new THREE.BufferAttribute(lineColors.slice(0, colorIdx), 3));

    // Subtle rotation and parallax
    group.rotation.y += 0.001;
    group.rotation.x += (mouseY * 0.00005 - group.rotation.x) * 0.05;
    group.rotation.z += (mouseX * 0.00005 - group.rotation.z) * 0.05;

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

camera.position.z = 1000;
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
