const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

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

const geometry = new THREE.SphereGeometry(20, 20, 3);
const material = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  specular: 0xf9d71c,
  shininess: 25,
})

//LOOP TO ADD ALL OF OUR OBJECTS IN. Drops should like nice from this angle!

for(var j = 0; j < 3; j++){
  let randX = Math.random() * 300;
  let randY = Math.random() * 300;

  var meshRand  = new THREE.Mesh(geometry, material);
  meshRand.position.x = randX;
  meshRand.position.y = randY;
  meshRand.position.z = -1000;
  scene.add(meshRand);
};

renderer.render(scene, camera);

//RENDER LOOP
requestAnimationFrame(render);

function render() {


  renderer.render(scene, camera);
  requestAnimationFrame(render);
}