
function preload (){
for(let i = 0; i < 15; i++)
images[i] = loadImage("images/ing"+i+".png")
pictures.push(image)
tiles.push(new Tile(pictures[i]))
tiles[i] = new Tiles(i,i,images[i])
}
images(i)
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x=0
  let y =0
  for(let Tile of tiles){
    print(x,y)
    image(tile.Image,x,y,width/4,height/4)
    x += width/4
    if(x >= width) {
      x = 0
      y += height/4
    }
  }

}
