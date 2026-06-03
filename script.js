const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const points = [];

function createHeart() {

    for (let i = 0; i < 2500; i++) {

        const t = Math.random() * Math.PI * 2;

        const x =
            16 * Math.pow(Math.sin(t), 3);

        const y =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);

        const depth = (Math.random() - 0.5) * 40;

        points.push({
            x: x * 15,
            y: y * 15,
            z: depth
        });
    }
}

createHeart();

let rotY = 0;
let rotX = 0;

function project(point) {

    let x = point.x;
    let y = point.y;
    let z = point.z;

    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    let dx = x * cosY - z * sinY;
    let dz = x * sinY + z * cosY;

    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);

    let dy = y * cosX - dz * sinX;
    dz = y * sinX + dz * cosX;

    const perspective = 800;

    const scale =
        perspective /
        (perspective + dz + 300);

    return {
        x: dx * scale + canvas.width / 2,
        y: -dy * scale + canvas.height / 2,
        z: dz,
        scale: scale
    };
}

function animate() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    rotY += 0.01;
    rotX += 0.003;

    const rendered = [];

    for (const point of points) {
        rendered.push(project(point));
    }

    rendered.sort((a, b) => a.z - b.z);

    for (const p of rendered) {

        const size =
            Math.max(6, p.scale * 12);

        ctx.save();

        ctx.translate(p.x, p.y);

        ctx.fillStyle = "#FFD700";
        ctx.shadowColor = "#FFD700";
        ctx.shadowBlur = 20;

        ctx.font = `bold ${size}px Arial`;

        ctx.fillText("I LOVE YOU", 0, 0);

        ctx.restore();
    }

    requestAnimationFrame(animate);
}

animate();