
function preload (){
for(let i = 0, i < 15, i++)
images[i] = loadImage("images/ing"+i+".png")

tiles[i] = new Tiles(i,i,images[i])
}
images(i)
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
