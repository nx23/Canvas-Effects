const canvas = document.getElementById("canvas1")
canvas.width = innerWidth
canvas.height = innerHeight

// get context
const c = canvas.getContext('2d')

const particlesArray = []

// mouse interaction
const mouse = {
    x: undefined,
    y: undefined
}

class Particle {
    constructor() {
        //this.x = mouse.x
        //this.y = mouse.y
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = 50
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
    }

    draw() {
        c.fillStyle = 'white'
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fill()
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

function init(){
    for (let index = 0; index < 100; index++) {
        particlesArray.push(new Particle())
    }
}
init()

function handleParticle(){
    particlesArray.forEach((particle) => {
        particle.update()
        particle.draw()
    })
}

function animate() {
    var animationId = requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    handleParticle()
}


animate()