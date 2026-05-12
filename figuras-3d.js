// Figuras interactivas 3D/2D para Matemáticas - Three.js
(async function(){
const q=window._currentQuestion||'';
const T=await import('https://cdn.jsdelivr.net/npm/three@0.163.0/build/three.module.js');
const{OrbitControls}=await import('https://cdn.jsdelivr.net/npm/three@0.163.0/examples/jsm/controls/OrbitControls.js');
const{Scene,PerspectiveCamera,WebGLRenderer,MeshStandardMaterial,MeshBasicMaterial,
EdgesGeometry,LineSegments,LineBasicMaterial,DirectionalLight,AmbientLight,
CylinderGeometry,ConeGeometry,SphereGeometry,BoxGeometry,Mesh,Color,GridHelper,
RingGeometry,CircleGeometry,Group,DoubleSide,Vector3}=T;

window.renderMathFigure=function(container,question){
 const q=question.toLowerCase();
 let type=null,params={};
 if(q.includes('cilíndric')||q.includes('cilindro')){type='cylinder';
  let m=question.match(/radio de (\d+)/);params.r=m?+m[1]:5;
  m=question.match(/altura de (\d+)/);params.h=m?+m[1]:10;}
 else if(q.includes('cono')&&(q.includes('radio')||q.includes('volumen'))){type='cone';
  let m=question.match(/radio.*?(\d+)/);params.r=m?+m[1]:5;
  m=question.match(/altura.*?(\d+)/);params.h=m?+m[1]:12;}
 else if(q.includes('esfera')){type='sphere';
  let m=question.match(/radio (\d+)/);params.r=m?+m[1]:3;}
 else if(q.includes('prisma triangular')){type='prism';params.a=15;params.h=10;}
 else if(q.includes('trapecio')){type='trapezoid';}
 else if(q.includes('hexágono')){type='hexagon';}
 else if(q.includes('pentágono')){type='pentagon';}
 else if(q.includes('octágono')){type='octagon';}
 else if(q.includes('semicírculo')){type='semicircle';}
 else if(q.includes('sector circular')){type='sector';}
 else if(q.includes('escalera')&&q.includes('muro')){type='ladder';}
 else if(q.includes('triángulo rectángulo')){type='righttri';}
 else if(q.includes('ángulo de elevación')||q.includes('sombra')){type='elevation';}
 else if(q.includes('rampa')){type='ramp';}
 else if(q.includes('isósceles')){type='isosceles';}
 else if(q.includes('suplementarios')){type='supplementary';}
 else if(q.includes('pintar')&&q.includes('ventana')){type='wall';}
 else if(q.includes('parábola')||q.includes('f(x)')&&q.includes('x²')){type='parabola';}
 else if(q.includes('pendiente')&&q.includes('recta')){type='line';}
 else if(q.includes('distancia entre')&&q.includes('puntos')){type='distance';}
 else if(q.includes('circunferencia')&&q.includes('centro')){type='circle_eq';}
 else if(q.includes('sucesión')||q.includes('progresión')){type='sequence';}
 else if(q.includes('dados')){type='dice';}
 else if(q.includes('moneda')){type='coins';}
 else if(q.includes('diagrama de caja')||q.includes('boxplot')){type='boxplot';}
 else if(q.includes('moda')||q.includes('calificaciones')){type='barchart';}

 if(!type)return;
 container.classList.remove('hidden');

 // 3D figures
 if(['cylinder','cone','sphere','prism'].includes(type)){
  const W=280,H=240;
  const canvas=document.createElement('canvas');
  canvas.width=W;canvas.height=H;
  canvas.style.cssText='border-radius:16px;border:1px solid #e5e5e5;background:linear-gradient(135deg,#f8f9ff,#f0f0f5);cursor:grab;max-width:100%;touch-action:none';
  container.appendChild(canvas);
  const lbl=document.createElement('div');
  lbl.style.cssText='text-align:center;font-size:11px;color:#6366f1;font-weight:600;margin-top:4px';
  lbl.textContent='🖱️ Arrastra para rotar • Scroll para zoom';
  container.appendChild(lbl);

  const scene=new Scene();scene.background=new Color(0xf8f9ff);
  const cam=new PerspectiveCamera(45,W/H,0.1,100);cam.position.set(4,3,5);
  const ren=new WebGLRenderer({canvas,antialias:true});ren.setSize(W,H);ren.setPixelRatio(Math.min(window.devicePixelRatio,2));
  const ctrl=new OrbitControls(cam,canvas);ctrl.enableDamping=true;ctrl.autoRotate=true;ctrl.autoRotateSpeed=1.5;
  scene.add(new AmbientLight(0xffffff,0.6));
  const dl=new DirectionalLight(0xffffff,0.8);dl.position.set(5,8,5);scene.add(dl);

  const mat=new MeshStandardMaterial({color:0x6366f1,transparent:true,opacity:0.55,side:DoubleSide});
  const wireMat=new LineBasicMaterial({color:0x312e81});
  let geo;
  if(type==='cylinder'){const s=Math.max(params.r,params.h)/6;geo=new CylinderGeometry(params.r/s,params.r/s,params.h/s,32);}
  else if(type==='cone'){const s=Math.max(params.r,params.h)/6;geo=new ConeGeometry(params.r/s,params.h/s,32);}
  else if(type==='sphere'){geo=new SphereGeometry(2.5,32,32);}
  else if(type==='prism'){geo=new CylinderGeometry(2,2,3,3);}

  const mesh=new Mesh(geo,mat);scene.add(mesh);
  scene.add(new LineSegments(new EdgesGeometry(geo),wireMat));

  const grid=new GridHelper(10,10,0xddd6fe,0xede9fe);grid.position.y=-geo.parameters.height/2||(-2.5);scene.add(grid);

  // Dimension labels as sprites would be complex, add CSS overlay
  const dimDiv=document.createElement('div');
  dimDiv.style.cssText='position:absolute;top:8px;left:8px;background:rgba(99,102,241,0.9);color:#fff;padding:4px 10px;border-radius:8px;font-size:11px;font-weight:600;pointer-events:none';
  if(type==='cylinder')dimDiv.textContent=`r=${params.r} · h=${params.h}`;
  else if(type==='cone')dimDiv.textContent=`r=${params.r} · h=${params.h}`;
  else if(type==='sphere')dimDiv.textContent=`r=${params.r}`;
  else if(type==='prism')dimDiv.textContent=`A=15cm² · h=10cm`;
  container.style.position='relative';container.appendChild(dimDiv);

  let anim;(function loop(){anim=requestAnimationFrame(loop);ctrl.update();ren.render(scene,cam)})();
  container._cleanup=()=>{cancelAnimationFrame(anim);ren.dispose();ctrl.dispose();geo.dispose();mat.dispose()};
  return;
 }

 // 2D Canvas figures
 const W=300,H=220;
 const canvas=document.createElement('canvas');canvas.width=W*2;canvas.height=H*2;
 canvas.style.cssText=`width:${W}px;height:${H}px;border-radius:16px;border:1px solid #e5e5e5;background:#fafafe;max-width:100%`;
 container.appendChild(canvas);
 const ctx=canvas.getContext('2d');ctx.scale(2,2);
 ctx.strokeStyle='#0A0A0A';ctx.lineWidth=2;ctx.font='bold 12px Inter,sans-serif';

 const purple='#6366f1',red='#ef4444',green='#10b981';
 function dash(x1,y1,x2,y2,c){ctx.save();ctx.strokeStyle=c||purple;ctx.setLineDash([5,4]);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore();}
 function label(t,x,y,c){ctx.save();ctx.fillStyle=c||purple;ctx.font='bold 11px Inter,sans-serif';ctx.textAlign='center';ctx.fillText(t,x,y);ctx.restore();}
 function rightAngle(x,y,s){ctx.strokeRect(x,y-s,s,s);}

 if(type==='trapezoid'){
  ctx.beginPath();ctx.moveTo(80,50);ctx.lineTo(220,50);ctx.lineTo(250,170);ctx.lineTo(50,170);ctx.closePath();ctx.stroke();
  dash(80,50,80,170);label('h=5m',65,115);label('B menor=8m',150,42);label('B mayor=12m',150,190);
 }else if(type==='hexagon'){
  ctx.beginPath();for(let i=0;i<6;i++){const a=Math.PI/3*i-Math.PI/6;ctx.lineTo(150+60*Math.cos(a),110+60*Math.sin(a))}ctx.closePath();ctx.stroke();
  dash(150,110,150+60*Math.cos(-Math.PI/6),110+60*Math.sin(-Math.PI/6));label('a=3.46',185,90);label('l=4',195,65);
 }else if(type==='pentagon'){
  ctx.beginPath();for(let i=0;i<5;i++){const a=2*Math.PI/5*i-Math.PI/2;ctx.lineTo(150+65*Math.cos(a),115+65*Math.sin(a))}ctx.closePath();ctx.stroke();
  label('Σ ángulos = ?',150,120);
 }else if(type==='octagon'){
  ctx.beginPath();for(let i=0;i<8;i++){const a=2*Math.PI/8*i;ctx.lineTo(150+60*Math.cos(a),110+60*Math.sin(a))}ctx.closePath();ctx.stroke();
  ctx.save();ctx.strokeStyle=purple;ctx.lineWidth=0.5;ctx.globalAlpha=0.3;
  const pts=[];for(let i=0;i<8;i++){const a=2*Math.PI/8*i;pts.push([150+60*Math.cos(a),110+60*Math.sin(a)])}
  for(let i=0;i<8;i++)for(let j=i+2;j<8;j++){if(Math.abs(i-j)!==7){ctx.beginPath();ctx.moveTo(...pts[i]);ctx.lineTo(...pts[j]);ctx.stroke()}}
  ctx.restore();label('diagonales=?',150,115);
 }else if(type==='semicircle'){
  ctx.beginPath();ctx.arc(150,150,70,Math.PI,0);ctx.closePath();ctx.stroke();
  dash(80,150,220,150);label('d=14cm',150,168);
 }else if(type==='sector'){
  ctx.beginPath();ctx.moveTo(120,150);ctx.arc(120,150,80,-(Math.PI/2),0);ctx.closePath();ctx.stroke();
  label('r=8',85,110);label('90°',140,130,purple);ctx.beginPath();ctx.arc(120,150,3,0,2*Math.PI);ctx.fillStyle=purple;ctx.fill();
 }else if(type==='ladder'){
  ctx.beginPath();ctx.moveTo(60,190);ctx.lineTo(60,40);ctx.lineTo(60,190);ctx.lineTo(160,190);ctx.stroke();
  ctx.strokeStyle=purple;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(160,190);ctx.lineTo(60,40);ctx.stroke();ctx.strokeStyle='#0a0a0a';
  rightAngle(60,190,12);label('13m',120,105,purple);label('5m',110,205);label('h=?',42,120);
 }else if(type==='righttri'){
  ctx.beginPath();ctx.moveTo(50,180);ctx.lineTo(230,180);ctx.lineTo(50,50);ctx.closePath();ctx.stroke();
  rightAngle(50,180,14);label('cateto adyacente',140,198);label('opuesto',32,120);label('hipotenusa',155,105,purple);
 }else if(type==='elevation'){
  ctx.beginPath();ctx.moveTo(230,180);ctx.lineTo(230,40);ctx.stroke();
  ctx.beginPath();ctx.moveTo(40,180);ctx.lineTo(230,180);ctx.stroke();
  dash(40,180,230,40,purple);rightAngle(218,180,12);label('distancia',135,198);label('h=?',248,110);label('θ',75,170,purple);
  ctx.beginPath();ctx.arc(40,180,30,-(Math.PI/6),0);ctx.strokeStyle=purple;ctx.stroke();
 }else if(type==='ramp'){
  ctx.beginPath();ctx.moveTo(30,170);ctx.lineTo(250,170);ctx.lineTo(250,60);ctx.stroke();
  ctx.strokeStyle=purple;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(30,170);ctx.lineTo(250,60);ctx.stroke();
  rightAngle(238,170,12);label('10m',130,100,purple);label('h=?',265,120);label('45°',70,162);
 }else if(type==='isosceles'){
  ctx.beginPath();ctx.moveTo(150,30);ctx.lineTo(60,180);ctx.lineTo(240,180);ctx.closePath();ctx.stroke();
  label('?°',150,60,red);label('70°',85,160);label('70°',215,160);
 }else if(type==='supplementary'){
  ctx.beginPath();ctx.moveTo(30,120);ctx.lineTo(270,120);ctx.stroke();
  ctx.beginPath();ctx.moveTo(150,120);ctx.lineTo(110,40);ctx.stroke();
  label('65°',125,100);label('?°',185,100,red);
  ctx.beginPath();ctx.arc(150,120,20,Math.PI,-Math.PI+(65*Math.PI/180),true);ctx.strokeStyle=purple;ctx.stroke();
 }else if(type==='wall'){
  ctx.strokeRect(30,30,240,140);ctx.fillStyle='#e5e7eb';ctx.fillRect(110,60,70,70);ctx.strokeStyle=purple;ctx.strokeRect(110,60,70,70);
  label('1.5m',145,100,purple);label('6m',150,185);label('3m',15,105);
 }else if(type==='parabola'){
  // Coordinate grid + parabola
  ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
  for(let i=0;i<=10;i++){ctx.beginPath();ctx.moveTo(30+24*i,20);ctx.lineTo(30+24*i,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,20+18*i);ctx.lineTo(270,20+18*i);ctx.stroke();}
  ctx.strokeStyle='#0a0a0a';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(150,20);ctx.lineTo(150,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,110);ctx.lineTo(270,110);ctx.stroke();
  ctx.strokeStyle=purple;ctx.lineWidth=2.5;ctx.beginPath();
  for(let px=-5;px<=5;px+=0.1){const x=px,y=x*x;const sx=150+x*24,sy=110-y*9;if(sy>15&&sy<205){if(px===-5)ctx.moveTo(sx,sy);else ctx.lineTo(sx,sy)}}
  ctx.stroke();label('y=x²',250,50,purple);label('x',265,105);label('y',155,15);
 }else if(type==='line'){
  ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
  for(let i=0;i<=10;i++){ctx.beginPath();ctx.moveTo(30+24*i,20);ctx.lineTo(30+24*i,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,20+18*i);ctx.lineTo(270,20+18*i);ctx.stroke();}
  ctx.strokeStyle='#0a0a0a';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(150,20);ctx.lineTo(150,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,110);ctx.lineTo(270,110);ctx.stroke();
  ctx.strokeStyle=purple;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(30,200);ctx.lineTo(270,20);ctx.stroke();
  ctx.fillStyle=red;ctx.beginPath();ctx.arc(102,146,5,0,2*Math.PI);ctx.fill();
  ctx.fillStyle=green;ctx.beginPath();ctx.arc(198,74,5,0,2*Math.PI);ctx.fill();
  label('A',95,162,red);label('B',205,68,green);label('m=Δy/Δx',230,130,purple);
 }else if(type==='distance'){
  ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
  for(let i=0;i<=10;i++){ctx.beginPath();ctx.moveTo(30+24*i,20);ctx.lineTo(30+24*i,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,20+18*i);ctx.lineTo(270,20+18*i);ctx.stroke();}
  ctx.strokeStyle='#0a0a0a';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(150,20);ctx.lineTo(150,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,110);ctx.lineTo(270,110);ctx.stroke();
  dash(78,74,174,38);
  ctx.fillStyle=red;ctx.beginPath();ctx.arc(78,74,5,0,2*Math.PI);ctx.fill();
  ctx.fillStyle=green;ctx.beginPath();ctx.arc(174,38,5,0,2*Math.PI);ctx.fill();
  label('P(1,3)',65,90,red);label('Q(4,7)',185,30,green);label('d=?',140,48,purple);
 }else if(type==='circle_eq'){
  ctx.strokeStyle='#e5e7eb';ctx.lineWidth=1;
  for(let i=0;i<=10;i++){ctx.beginPath();ctx.moveTo(30+24*i,20);ctx.lineTo(30+24*i,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,20+18*i);ctx.lineTo(270,20+18*i);ctx.stroke();}
  ctx.strokeStyle='#0a0a0a';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(150,20);ctx.lineTo(150,200);ctx.stroke();ctx.beginPath();ctx.moveTo(30,110);ctx.lineTo(270,110);ctx.stroke();
  ctx.strokeStyle=purple;ctx.lineWidth=2;ctx.beginPath();ctx.arc(174+24,110-18,5*18,0,2*Math.PI);ctx.stroke();
  ctx.fillStyle=purple;ctx.beginPath();ctx.arc(174+24,110-18,4,0,2*Math.PI);ctx.fill();
  label('C(3,-1)',210,105,purple);dash(198,92,198+40,92);label('r=5',225,86);
 }else if(type==='sequence'){
  for(let i=0;i<7;i++){const x=25+i*38,y=110;ctx.fillStyle=i<4?purple:'#c4b5fd';ctx.beginPath();ctx.arc(x+15,y,15,0,2*Math.PI);ctx.fill();
  ctx.fillStyle='#fff';ctx.font='bold 11px Inter';ctx.textAlign='center';
  const vals=[3,7,11,15,19,23,'?'];ctx.fillText(vals[i],x+15,y+4);}
  label('+4  +4  +4  +4  +4',150,80,purple);
  for(let i=0;i<6;i++){ctx.beginPath();ctx.strokeStyle='#c4b5fd';ctx.lineWidth=1;ctx.moveTo(55+i*38,90);ctx.quadraticCurveTo(55+i*38+19,78,55+i*38+38,90);ctx.stroke();}
 }else if(type==='dice'){
  for(let d=0;d<2;d++){const ox=60+d*120,oy=60;
  ctx.save();ctx.translate(ox,oy);ctx.rotate(d*0.1-0.05);
  ctx.fillStyle='#fff';ctx.strokeStyle='#0a0a0a';ctx.lineWidth=2;
  ctx.beginPath();ctx.roundRect(0,0,80,80,10);ctx.fill();ctx.stroke();
  ctx.fillStyle='#0a0a0a';const dots=d===0?[[40,40]]:[[25,25],[55,55]];
  dots.forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y,6,0,2*Math.PI);ctx.fill()});
  ctx.restore();}
  label('Σ = 7  →  P = ?',150,180,purple);
 }else if(type==='coins'){
  for(let i=0;i<3;i++){const x=65+i*80;
  ctx.beginPath();ctx.arc(x,90,28,0,2*Math.PI);ctx.fillStyle=i<2?'#fbbf24':'#e5e7eb';ctx.fill();ctx.strokeStyle='#0a0a0a';ctx.lineWidth=1.5;ctx.stroke();
  ctx.fillStyle='#0a0a0a';ctx.font='bold 14px Inter';ctx.textAlign='center';ctx.fillText(i<2?'C':'S',x,95);}
  label('P(exactamente 2 caras) = ?',150,160,purple);
 }else if(type==='boxplot'){
  ctx.beginPath();ctx.moveTo(50,110);ctx.lineTo(250,110);ctx.stroke();
  for(let v of[50,100,140,190,250]){ctx.beginPath();ctx.moveTo(v,100);ctx.lineTo(v,120);ctx.stroke();}
  ctx.fillStyle='rgba(99,102,241,0.15)';ctx.fillRect(100,85,90,50);ctx.strokeStyle=purple;ctx.strokeRect(100,85,90,50);
  ctx.strokeStyle=red;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(140,85);ctx.lineTo(140,135);ctx.stroke();
  label('Min',50,78);label('Q1',100,78);label('Mediana',140,78,red);label('Q3',190,78);label('Max',250,78);
 }else if(type==='barchart'){
  const vals=[7,8,9,7,10,8,7,9,8,7];const counts={};vals.forEach(v=>counts[v]=(counts[v]||0)+1);
  const keys=Object.keys(counts).sort();const maxC=Math.max(...Object.values(counts));
  keys.forEach((k,i)=>{const bh=counts[k]/maxC*120;const x=60+i*55;
  ctx.fillStyle=counts[k]===maxC?purple:'#c4b5fd';ctx.fillRect(x,170-bh,40,bh);ctx.strokeStyle='#312e81';ctx.strokeRect(x,170-bh,40,bh);
  label(k,x+20,188);label(counts[k],x+20,165-bh,counts[k]===maxC?red:'#666');});
  label('Moda = ?',150,30,red);
 }
};
})();
