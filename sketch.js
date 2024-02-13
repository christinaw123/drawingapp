//needed to do: make the brush shape more noisy and more transparent as the circle increases, color features

//CLICK AND DRAG TO DRAW, CLICK AGAIN TO STOP SPREAD

// initial setting; nothing will happen until you click
let drawing = false;

let size = 20;

// array for current circles
let circles = []; 

// array for all previously drawn circles
let previousCircles = [];


// setup, size, and black screen
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}


function draw() {
  if(mouseIsPressed){
        // clear the canvas + need for transparent on black
    background(0);
    
    // draw all previously drawn circles
    keep();
    
    // draw current brush strokes
    brush();
  }
    // resetting brush
  if (mouseIsPressed!=true) {
    noFill();
    transfer();
  }
  }



// when mouse is clicked, the spread stops
function mousePressed() {
  // stop drawing when you click on the mouse
 // drawing = !drawing;

}


// brush when drag mouse
function mouseDragged() {
  if (mouseIsPressed) {
    // current brush (updates new circles where our mouse is)
    circles.push({ x: mouseX, y: mouseY, size: size });
  }
}


// brush to render circles on canvas
function brush() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    // transparent white (need to create ability to change color)
    fill(255, 50);
    // puts circle from array wherever our mouse is
    ellipse(circle.x, circle.y, circle.size);
    // increase brush size (for dissoling effect)
    circle.size += 0.5;
  }
}


// transfer current circles array to previousCircles array to keep old strokes on canvas while having new active brush
function transfer() {
  for (let i = 0; i < circles.length; i++) {
    previousCircles.push(circles[i]);
  }
  
  // reset array for the next stroke
  circles = [];

}


// keeping all previous circles drawn
function keep() {
  for (let i = 0; i < previousCircles.length; i++) {
    let circle = previousCircles[i];
    fill(255, 50);
    ellipse(circle.x, circle.y, circle.size);
  }
}