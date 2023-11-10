function setup() {
    createCanvas(900,700)
    background(150)
}
let x = 100;
let y = 100;
function draw() {
    background(150)
    point(x++,y++)
    ellipse(x++,random(200,300),50,150)
    ellipse(mouseX,mouseY,30,40)

}