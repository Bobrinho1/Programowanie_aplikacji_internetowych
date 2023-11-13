function setup() {
    createCanvas(900,700)
    background(150)
    for (let i = 0; i < 5; i++){
        let x1 = random(width)
        let y1 = random(height)
        let promien = random(50, 100)
        let kolor = fill(Math.random() * 255 + 1, Math.floor(Math.random() * 255 + 1, Math.floor(Math.random() * 255 + 1)))
        let szybkoscx = random(-5, 5)
        let szybkoscy = random(-5, 5)
        circles.push({x1 , y1, promien, kolor, szybkoscx, szybkoscy})
        }

}
let x = 100;
let y = 100;
function draw() {
    background(150)
    ellipse(x,y,50,50)
}
