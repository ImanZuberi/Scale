let sliderZ;
let squareSize;
let img; 
let initialSize = 20;
let textDiv;


function preload() {
    img = loadImage('Images/Water.webp');
}

function setup() {
  createCanvas(1425, 800, WEBGL);
  background(69, 83, 110);
  colorMode(RGB);
  frameRate(90);

  sliderZ = createSlider(10, 400, initialSize);
  sliderZ.position(10, height + 20);
    sliderZ.style('width', '1400px'); 
    sliderZ.style('height', '20px'); 
    sliderZ.style('background-color', '#060169'); 
    sliderZ.style('outline', 'none'); 
    sliderZ.style('border', 'none'); 
    sliderZ.style('border-radius', '10px'); 
    sliderZ.style('appearance', 'none');

    textDiv = createDiv('USE THE SCROLL BAR!');
    textDiv.position(width / 1.5 - textDiv.elt.offsetWidth / 1.55, height / 11 - textDiv.elt.offsetHeight / 2); // Center the text
    textDiv.style('font-size', '40px');
    textDiv.style('color', '#ffffff');

  //squareSize = 50;
}

function draw() {
  background(69, 83, 110);

  
  squareSize = map(sliderZ.value(), 10, 400, 10, width * 3.5); 

  translate(-width / 2, -height / 2);


  let squareX = (width - squareSize) / 2;
  let squareY = (height - squareSize) / 1.5;

  image(img, squareX, squareY, squareSize, squareSize);

 


 /* // Draw the square
  fill(31, 24, 92);
  rect(squareX, squareY, squareSize, squareSize);*/
}
