// math-visuals.js - Precise Pedagogical Version
let currentRenderer = null;

window.renderMathFigure = function(container, questionText, meta) {
    if (!window.THREE) {
        console.error("Three.js not loaded.");
    }
    
    // Clean up previous scene/canvas
    // Clean up previous observer
    if (container._ro) {
        container._ro.disconnect();
    }

    const m = meta || {};
    const type = m.type || "unknown";

    // Initial render
    const runRender = () => {
        container.innerHTML = '';
        container.style.height = 'auto';
        const isMobile = window.innerWidth < 768;
        const targetHeight = isMobile ? 280 : 350;
        container.style.minHeight = targetHeight + 'px';
        
        if (type.startsWith('3d') && window.THREE) {
            render3D(container, m, targetHeight);
        } else {
            render2D(container, m, targetHeight);
        }
    };

    // Responsive observer
    const ro = new ResizeObserver(() => {
        if (container.clientWidth > 0) runRender();
    });
    ro.observe(container);
    
    // Store observer to disconnect on next call if needed
    container._ro = ro;
    
    runRender();
};

function render3D(container, m, targetHeight) {
    if (currentRenderer && currentRenderer.dispose) currentRenderer.dispose();
    currentRenderer = null;

    const wrapper = document.createElement('div');
    wrapper.style.height = targetHeight + 'px';
    wrapper.style.width = '100%';
    container.appendChild(wrapper);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);

    const camera = new THREE.PerspectiveCamera(75, wrapper.clientWidth / targetHeight, 0.1, 1000);
    camera.position.set(4, 4, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(wrapper.clientWidth, targetHeight);
    wrapper.appendChild(renderer.domElement);
    currentRenderer = renderer;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const pl = new THREE.PointLight(0xffffff, 1);
    pl.position.set(10, 10, 10);
    scene.add(pl);

    const grid = new THREE.GridHelper(10, 10, 0xcbd5e1, 0xf1f5f9);
    scene.add(grid);

    let geometry, material, mesh;
    const color = 0x6366f1;
    material = new THREE.MeshPhongMaterial({ color: color, transparent: true, opacity: 0.8, shininess: 100 });

    switch(m.type) {
        case '3d_cylinder':
            geometry = new THREE.CylinderGeometry(m.r || 1, m.r || 1, m.h || 3, 32);
            break;
        case '3d_cone':
            geometry = new THREE.ConeGeometry(m.r || 1, m.h || 3, 32);
            break;
        case '3d_sphere':
            geometry = new THREE.SphereGeometry(m.r || 2, 32, 32);
            break;
        case '3d_prism':
            geometry = new THREE.CylinderGeometry(m.r || 1.5, m.r || 1.5, m.h || 3, 3);
            break;
        case '3d_composite':
            const cylGeom = new THREE.CylinderGeometry(m.r || 1, m.r || 1, m.h || 3, 32);
            scene.add(new THREE.Mesh(cylGeom, material));
            const hemiGeom = new THREE.SphereGeometry(m.r || 1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
            const hemiMesh = new THREE.Mesh(hemiGeom, material);
            hemiMesh.position.y = (m.h || 3) / 2;
            scene.add(hemiMesh);
            geometry = cylGeom; // for edges
            break;
        case '3d_cube_count':
            const cubes = m.cubes || [[1,1],[1,0]];
            cubes.forEach((row, i) => {
                row.forEach((h, j) => {
                    for(let k=0; k<h; k++) {
                        const box = new THREE.BoxGeometry(0.95, 0.95, 0.95);
                        const cubeMesh = new THREE.Mesh(box, material);
                        cubeMesh.position.set(i - cubes.length/2, k, j - row.length/2);
                        scene.add(cubeMesh);
                        const ed = new THREE.EdgesGeometry(box);
                        scene.add(new THREE.LineSegments(ed, new THREE.LineBasicMaterial({color: 0x000000})));
                    }
                });
            });
            geometry = null;
            break;
        case '3d_unfolded_cube':
            // Logic for a flat layout of a cube
            const faces = [
                {p:[0,0,0], r:[0,0,0]}, {p:[1,0,0], r:[0,0,0]}, {p:[2,0,0], r:[0,0,0]},
                {p:[1,1,0], r:[0,0,0]}, {p:[1,-1,0], r:[0,0,0]}, {p:[1,-2,0], r:[0,0,0]}
            ];
            faces.forEach(f => {
                const plane = new THREE.PlaneGeometry(0.95, 0.95);
                const faceMesh = new THREE.Mesh(plane, material);
                faceMesh.position.set(f.p[0]-1, f.p[1], f.p[2]);
                scene.add(faceMesh);
                const ed = new THREE.EdgesGeometry(plane);
                scene.add(new THREE.LineSegments(ed, new THREE.LineBasicMaterial({color: 0x000000})));
            });
            geometry = null;
            camera.position.set(0,0,5);
            controls.enableRotate = false; // Keep it 2D-like for unfolded
            break;
        case '3d_prism_hex':
            geometry = new THREE.CylinderGeometry(m.r || 2, m.r || 2, m.h || 4, 6);
            break;
        default:
            geometry = new THREE.BoxGeometry(2, 2, 2);
    }

    if (geometry) {
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        const edges = new THREE.EdgesGeometry(geometry);
        scene.add(new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x4338ca })));
    }

    const animate = () => {
        if (!currentRenderer) return;
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();
}

function drawGrid(ctx, w, h, cx, cy) {
    ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1;
    ctx.beginPath();
    for(let x = cx % 20; x <= w; x += 20) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
    for(let y = cy % 20; y <= h; y += 20) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
    ctx.stroke();
    
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, 0); ctx.lineTo(cx, h);
    ctx.moveTo(0, cy); ctx.lineTo(w, cy);
    ctx.stroke();

    ctx.fillStyle = '#475569'; ctx.font = 'bold 11px Inter';
    ctx.textAlign = 'center';
    for(let i = -15; i <= 15; i++) {
        if(i === 0) continue;
        if (cx + i*20 > 0 && cx + i*20 < w) ctx.fillText(i, cx + i*20, cy + 15);
        ctx.textAlign = 'right';
        if (cy - i*20 > 0 && cy - i*20 < h) ctx.fillText(i, cx - 5, cy - i*20 + 4);
        ctx.textAlign = 'center';
    }
}

function render2D(container, m, targetHeight) {
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;
    const w = container.clientWidth || 500;
    const h = targetHeight;
    
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    const cx = w / 2;
    const cy = h / 2;

    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2; ctx.font = '14px Inter';
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';

    switch(m.type) {
        case '2d_slope_line':
            drawGrid(ctx, w, h, cx, cy);
            ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 3;
            if (m.x1 !== undefined && m.x2 !== undefined) {
                ctx.beginPath(); ctx.moveTo(cx + m.x1*20, cy - m.y1*20); ctx.lineTo(cx + m.x2*20, cy - m.y2*20); ctx.stroke();
                ctx.fillStyle = '#ef4444';
                ctx.beginPath(); ctx.arc(cx + m.x1*20, cy - m.y1*20, 4, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(cx + m.x2*20, cy - m.y2*20, 4, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = '#1e293b';
                ctx.fillText(`P1(${m.x1},${m.y1})`, cx + m.x1*20 + 8, cy - m.y1*20);
                ctx.fillText(`P2(${m.x2},${m.y2})`, cx + m.x2*20 + 8, cy - m.y2*20);
                if (m.mark_mid) {
                    let mx = (m.x1+m.x2)/2, my = (m.y1+m.y2)/2;
                    ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(cx + mx*20, cy - my*20, 5, 0, Math.PI*2); ctx.fill();
                    ctx.fillText(`M(${mx},${my})`, cx + mx*20 + 8, cy - my*20);
                }
            } else if (m.m !== undefined) {
                let xStart = -10, xEnd = 10;
                let yStart = m.m * (xStart - (m.x1||0)) + (m.y1||0);
                let yEnd = m.m * (xEnd - (m.x1||0)) + (m.y1||0);
                ctx.beginPath(); ctx.moveTo(cx + xStart*20, cy - yStart*20); ctx.lineTo(cx + xEnd*20, cy - yEnd*20); ctx.stroke();
            }
            break;

        case '2d_parabola':
            drawGrid(ctx, w, h, cx, cy);
            ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 3; ctx.beginPath();
            for(let x=-10; x<=10; x+=0.1) {
                let y = (m.a||1)*x*x + (m.b||0)*x + (m.c||0);
                let px = cx + x*20, py = cy - y*20;
                if(x<=-9.9) ctx.moveTo(px, py); else if (py >= 0 && py <= h) ctx.lineTo(px, py);
            }
            ctx.stroke();
            break;

        case '2d_matrix':
            ctx.beginPath(); ctx.lineWidth=3;
            ctx.moveTo(cx-80, cy-60); ctx.lineTo(cx-100, cy-60); ctx.lineTo(cx-100, cy+60); ctx.lineTo(cx-80, cy+60);
            ctx.moveTo(cx+80, cy-60); ctx.lineTo(cx+100, cy-60); ctx.lineTo(cx+100, cy+60); ctx.lineTo(cx+80, cy+60);
            ctx.stroke(); ctx.textAlign = 'center'; ctx.font = 'bold 18px Inter';
            if (m.values) m.values.forEach((row, i) => row.forEach((v, j) => ctx.fillText(v, cx - 40 + j*80, cy - 10 + i*40)));
            break;

        case '2d_cylinder':
            ctx.beginPath(); ctx.ellipse(cx, cy - 60, 60, 20, 0, 0, Math.PI*2); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(cx - 60, cy - 60); ctx.lineTo(cx - 60, cy + 60); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(cx + 60, cy - 60); ctx.lineTo(cx + 60, cy + 60); ctx.stroke();
            ctx.beginPath(); ctx.ellipse(cx, cy + 60, 60, 20, 0, 0, Math.PI); ctx.stroke();
            ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.ellipse(cx, cy + 60, 60, 20, 0, Math.PI, Math.PI*2); ctx.stroke();
            ctx.setLineDash([]); ctx.fillText(`r = ${m.r}`, cx + 10, cy - 50); ctx.fillText(`h = ${m.h}`, cx + 75, cy);
            break;

        case '2d_cone':
            ctx.beginPath(); ctx.ellipse(cx, cy + 60, 60, 20, 0, 0, Math.PI*2); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(cx - 60, cy + 60); ctx.lineTo(cx, cy - 80); ctx.lineTo(cx + 60, cy + 60); ctx.stroke();
            ctx.setLineDash([4,4]); ctx.beginPath(); ctx.moveTo(cx, cy-80); ctx.lineTo(cx, cy+60); ctx.stroke();
            ctx.setLineDash([]); ctx.fillText(`r = ${m.r}`, cx + 10, cy + 55); ctx.fillText(`h = ${m.h}`, cx - 35, cy);
            break;

        case '2d_shaded_area':
            ctx.strokeRect(cx-75, cy-75, 150, 150);
            ctx.fillStyle = '#6366f1'; ctx.beginPath(); ctx.arc(cx, cy, 75, 0, Math.PI*2); ctx.fill();
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath(); ctx.arc(cx, cy, 75, 0, Math.PI*2); ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = '#e0e7ff'; ctx.fillRect(cx-75, cy-75, 150, 150);
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath(); ctx.arc(cx, cy, 75, 0, Math.PI*2); ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeRect(cx-75, cy-75, 150, 150); ctx.beginPath(); ctx.arc(cx, cy, 75, 0, Math.PI*2); ctx.stroke();
            break;

        case '2d_triangle':
            ctx.beginPath(); ctx.moveTo(cx-100, cy+50); ctx.lineTo(cx+100, cy+50); ctx.lineTo(cx-20, cy-70); ctx.closePath(); ctx.stroke();
            ctx.fillText(`a = ${m.a}`, cx-70, cy-10); ctx.fillText(`b = ${m.b}`, cx, cy+70);
            ctx.fillText(`${m.angle}°`, cx-80, cy+40);
            break;

        case '2d_trapezoid':
            ctx.beginPath(); ctx.moveTo(cx-80, cy+50); ctx.lineTo(cx+80, cy+50); ctx.lineTo(cx+50, cy-50); ctx.lineTo(cx-50, cy-50); ctx.closePath(); ctx.stroke();
            ctx.fillText(`B = ${m.B || '?'}`, cx, cy+70); ctx.fillText(`b = ${m.b || '?'}`, cx, cy-65);
            ctx.setLineDash([4,4]); ctx.beginPath(); ctx.moveTo(cx-50, cy-50); ctx.lineTo(cx-50, cy+50); ctx.stroke();
            ctx.setLineDash([]); ctx.fillText(`h = ${m.h || '?'}`, cx-75, cy);
            break;

        case '2d_bar_chart':
        case '2d_histogram':
            let max = Math.max(...(m.data || [10])); let bw = (w-100)/(m.data || [1]).length;
            (m.data || []).forEach((v, i) => {
                let barH = (v/max)*150; ctx.fillStyle = '#6366f1';
                ctx.fillRect(50 + i*bw + 5, cy+80-barH, bw-10, barH);
                ctx.fillStyle = '#1e293b'; if(m.labels) ctx.fillText(m.labels[i], 50+i*bw+bw/2, cy+100);
            });
            break;

        case '2d_hexagon':
            ctx.beginPath(); for(let i=0; i<6; i++) { let a = i*Math.PI/3; ctx.lineTo(cx+70*Math.cos(a), cy+70*Math.sin(a)); } ctx.closePath(); ctx.stroke();
            ctx.fillText(`Lado: ${m.l || '?'}`, cx, cy+95);
            break;

        case '2d_dice_prob':
            const drawDie = (dx, dy, val) => {
                ctx.strokeRect(dx, dy, 60, 60); ctx.fillStyle = '#1e293b';
                const dots = { 1: [[30,30]], 2: [[15,15],[45,45]], 3: [[15,15],[30,30],[45,45]], 4: [[15,15],[45,15],[15,45],[45,45]], 5: [[15,15],[45,15],[30,30],[15,45],[45,45]], 6: [[15,15],[45,15],[15,30],[45,30],[15,45],[45,45]] };
                (dots[val]||[]).forEach(d => { ctx.beginPath(); ctx.arc(dx+d[0], dy+d[1], 4, 0, Math.PI*2); ctx.fill(); });
            };
            drawDie(cx-80, cy-30, 3); drawDie(cx+20, cy-30, 4);
            ctx.fillText(`Suma deseada: ${m.sum || '?'}`, cx, cy+60);
            break;

        case '2d_arithmetic_seq':
        case '2d_geometric_seq':
            ctx.textAlign = 'center'; ctx.font = 'bold 20px Inter';
            let seq = [m.a1 || 2]; for(let i=1; i<5; i++) seq.push(m.type.includes('arithmetic') ? seq[i-1]+(m.d||4) : seq[i-1]*(m.r||3));
            ctx.fillText(seq.join(', ') + '...', cx, cy);
            ctx.font = '14px Inter'; ctx.fillText(m.r ? `r: ${m.r}` : `d: ${m.d}`, cx, cy + 40);
            break;

        case '2d_circle':
            drawGrid(ctx, w, h, cx, cy); ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.arc(cx + (m.h||0)*20, cy - (m.k||0)*20, (m.r||1)*20, 0, Math.PI*2); ctx.stroke();
            ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(cx + (m.h||0)*20, cy - (m.k||0)*20, 4, 0, Math.PI*2); ctx.fill();
            break;

        default:
            ctx.textAlign = 'center'; ctx.fillStyle = '#94a3b8';
            ctx.fillText('Apoyo pedagógico visual', cx, cy - 10);
            ctx.font = 'italic 12px Inter'; ctx.fillText('(Simulación interactiva)', cx, cy + 10);
    }
}
