class Curve {
  constructor() {
    this.path = [];
    this.current = createVector();
  }

  setX(x) {
    this.current.x = x;
  }

  setY(y) {
    this.current.y = y;
  }

  addPoint() {
    this.path.push(this.current);
    this.current = createVector();
  }

  show() {
    beginShape();
    for (let p of this.path) {
      vertex(p.x, p.y)
    }
    endShape();
  }
}
