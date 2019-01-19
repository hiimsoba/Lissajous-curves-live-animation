let w = 60;
let rows, cols;
let angle = 0;
let curves;

function setup() {
  createCanvas(800, 600);

  // add some "smoothness"?
  smooth(32);

  // set the rows and cols
  rows = floor(height / w) - 1;
  cols = floor(width / w) - 1;

  // create the curves array
  curves = new Array(rows);
  for (let i = 0; i < curves.length; i++) {
    curves[i] = new Array(cols);
    for (let j = 0; j < curves[i].length; j++) {
      curves[i][j] = new Curve();
    }
  }
}

function draw() {
  background(0);

  // draw the circles on top
  noFill();
  stroke(255, 150);
  for (let i = 0; i < cols; i++) {
    let d = w * 0.8;
    let r = d / 2;
    strokeWeight(1.5);
    let cx = (i + 1) * w + w / 2;
    let cy = w / 2;
    let x = r * cos(angle * (i + 1) - PI / 2) + cx;
    ellipse(cx, cy, d, d);
    let y = r * sin(angle * (i + 1) - PI / 2) + cy;
    strokeWeight(6);
    point(x, y);
    strokeWeight(1);
    line(x, 0, x, height);
    for (let j = 0; j < rows; j++) {
      curves[j][i].setX(x);
    }
  }

  // draw the circles on the left
  for (let i = 0; i < rows; i++) {
    let d = w * 0.8;
    let r = d / 2;
    strokeWeight(1.5);
    let cx = w / 2;
    let cy = (i + 1) * w + w / 2;
    ellipse(cx, cy, d, d);
    let x = r * cos(angle * (i + 1) - PI / 2) + cx;
    let y = r * sin(angle * (i + 1) - PI / 2) + cy;
    strokeWeight(6);
    point(x, y);
    strokeWeight(1);
    line(0, y, width, y);
    for (let j = 0; j < cols; j++) {
      curves[i][j].setY(y);
    }
  }


  noFill();
  stroke(255);
  strokeWeight(1);
  for (let i = 0; i < curves.length; i++) {
    for (let j = 0; j < curves[i].length; j++) {
      curves[i][j].addPoint();
      curves[i][j].show();
    }
  }

  angle -= 0.01;
  if (Math.abs(angle) >= TWO_PI) {
    background(0);
    noFill();
    stroke(255);
    strokeWeight(1);
    for (let i = 0; i < curves.length; i++) {
      for (let j = 0; j < curves[i].length; j++) {
        curves[i][j].show();
        curves[i][j] = new Curve();
      }
    }
    angle = 0;
  }
}
