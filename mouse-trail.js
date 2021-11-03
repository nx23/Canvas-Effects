const canvas = document.getElementById("canvas1")
canvas.width = innerWidth
canvas.height = innerHeight
// create a global hue
let hue = 0

// get context
const c = canvas.getContext('2d')

const particlesArray = []

// mouse interaction
const mouse = {
    x: 0,
    y: 0
}

class Particle {
    constructor() {
        this.x = mouse.x
        this.y = mouse.y
        this.radius = Math.random() * 20
        //this.x = Math.random() * canvas.width
        //this.y = Math.random() * canvas.height
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `hsl(${hue}, 100%, 50%)`
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        if(this.radius > 0.2){
            this.radius -= 0.1
        }
    }

    draw() {
        c.fillStyle = this.color
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
    init()
})

function init(){
    for (let index = 0; index < 25; index ++) {
        particlesArray.push(new Particle())
        hue += 0.05
    }
}

function handleParticle(){
    particlesArray.forEach((particle, particleIndex) => {
        particle.update()
        particle.draw()
        if(particle.radius <= 0.2){
            setTimeout(() => {
                particlesArray.splice(particleIndex, 1)
            })
        }
    })
}

function animate() {
    var animationId = requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    // create fading effect
    //c.fillStyle = 'rgba(0, 0, 0, 0.05)'
    //c.fillRect(0, 0, canvas.width, canvas.height)
    handleParticle()
}


animate()