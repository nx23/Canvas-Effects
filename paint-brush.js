const canvas = document.getElementById("canvas1")
canvas.width = innerWidth
canvas.height = innerHeight

// get context
const c = canvas.getContext('2d')

// mouse interaction
const mouse = {
    x: undefined,
    y: undefined,
    down: false
}

const brush = {
    color: 'black',
    size: 5,
}

const palette = {x: 10, y: 10}

const colorsArray = ['white', 'red', 'yellow', 'green']

class Square {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        c.fillStyle = this.color
        // fillRect(positionX, positionY, width, height)
        c.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = brush.size
    }

    draw() {
        c.beginPath()
        c.fillStyle = brush.color
        c.strokeStyle = brush.color
        //c.lineWidth = brush.size
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fill()
        c.stroke()
    }
}

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})

addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
})

addEventListener('mousedown', () => {
    mouse.down = true
})

addEventListener('mouseup', () => {
    mouse.down = false
})

addEventListener('click', (event) => {
    if(mouse.x <= 55 & mouse.y >= 15 & mouse.y <= 70) {
        brush.color = colorsArray[0]
    }
    if(mouse.x >= 55 & mouse.x <= 110 & mouse.y >= 15 & mouse.y <= 70) {
        brush.color = colorsArray[1]
    }
    if(mouse.x >= 110 & mouse.x <= 165 & mouse.y >= 15 & mouse.y <= 70) {
        brush.color = colorsArray[2]
    }
    if(mouse.x >= 165 & mouse.x <= 220 & mouse.y >= 15 & mouse.y <= 70) {
        brush.color = colorsArray[3]
    }
})

colorsArray.forEach((color, colorid) =>{
    const square = new Square(palette.x, palette.y, 50, 50, color)
    palette.x += 55
    square.draw()
})

function animate() {
    var animationId = requestAnimationFrame(animate)
    if (mouse.down & mouse.x > 105 & mouse.y > 115){
        const circle = new Circle(mouse.x, mouse.y, 50)
        circle.draw()
    }
}


animate()