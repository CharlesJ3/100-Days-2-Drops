const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('rgb(10,25,50)',.25);
renderer.setPixelRatio( window.devicePixelRatio );
//Camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  1,
  2500
);

const scene = new THREE.Scene();

//Lights
let dirLight = new THREE.DirectionalLight(0x0000ff);
dirLight.position.set(-25, -1000, 100);

let dirLight2 = new THREE.DirectionalLight(0xffffff);
dirLight2.position.set(25, 1000, 100);

scene.add(dirLight, dirLight2);

const geometry = new THREE.TorusGeometry(10, 10, 3);
const material = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  specular: 0xf9d71c,
  shininess: 2,
})

const material2 = new THREE.MeshPhongMaterial({
  color: 0xFF0000,
  specular: 0xFFD700,
  shininess: 255,
})
//LOOP TO ADD ALL OF OUR OBJECTS IN. Drops should like nice from this angle!

let circles = [];

for(var j = 0; j < 125; j++){
  let luck = Math.round(Math.random() * 100);

  let randX = Math.random() * (1500 + -500) - 500;
  let randY = Math.random() * (500 + 200) - 200;

  if (luck !== 50) {
    var meshRand = new THREE.Mesh(geometry, material);
  } else {
    var meshRand = new THREE.Mesh(geometry, material2);
  }

  console.log()

  meshRand.position.x = randX;
  meshRand.position.y = randY;
  meshRand.position.z = -1000;

  circles.push(meshRand);
  scene.add(meshRand);
};

renderer.render(scene, camera);

//RENDER LOOP
requestAnimationFrame(render);

function render() {

  circles.map(e => {
    e.position.y -= Math.random() * (10 - 8) + 8;

    if(e.position.y <= - 250){
      let randX = Math.random() * (1500 + -500) - 500;
      e.position.x = randX;
      e.position.y = 500;


      console.log(e.position.y);
    }
  })
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}