import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

class circule {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.draw()
  }
}
// Implementation
let objects
let biggerCircule = new Object(80,80,20,colors[1]);
let circule1 = new circule(5,5,10,"red");
function init() {
  objects = [biggerCircule,circule1]
  //for (let i = 0; i < 400; i++) {
    // objects.push()
  //}
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  //c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  objects.forEach(object => {
    object.update()
  })
  //console.log(utils.distance(objects[0].x, objects[0].y, objects[1].x, objects[1].y))
  if (utils.distance(objects[0].x, objects[0].y, objects[1].x, objects[1].y) < objects[0].radius + objects[1].radius){
    objects[0].color = colors[3];
  }else {
    objects[0].color = colors[1];  
  }
}

init()
animate()
