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
        this.radius = Math.random()
        this.x = Math.random() * canvas.width
        this.y = 0 - this.radius
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 30 - 1.5
    }

    update() {
        this.y += this.speedY
        if(this.radius > 0.2){
            this.radius -= 0.1
        }
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
    for (let index = 0; index < 5; index++) {
        particlesArray.push(new Particle())
    }
}
init()

function handleParticle(){
    particlesArray.forEach((particle, particleIndex) => {
        particle.update()
        particle.draw()
        if(particle.y > canvas.height + particle.radius){
            setTimeout(() => {
                particlesArray.splice(particleIndex, 1)
            },0)
        }
    })
}

function animate() {
    var animationId = requestAnimationFrame(animate)
    init()
    c.fillStyle = 'rgb(0, 0, 0, 0.1)'
    //c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillRect(0, 0, canvas.width, canvas.height)
    handleParticle()
}


animate()