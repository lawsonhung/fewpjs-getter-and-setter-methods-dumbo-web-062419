// Add your Circle class here
console.log("Creating Circle class...")
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter(){
    return this._diameter = this.radius * 2
  }

  get circumference(){
    return this._circumference = (Math.PI * this.radius * 2)
    // returning undefined
    // return this._diameter
  }

  get area(){
    return this._area = Math.PI * (this.radius * this.radius)
  }

  set diameter(diameter){
    this.radius = diameter / 2
  }

  set circumference(circumference){
    this.radius = circumference / (Math.PI * 2)
  }
}

circle = new Circle( 6 )
console.log(circle.diameter);
// console.log(circle.radius)
// console.log(circle.diameter)
// circle.circumference
// console.log(circle.circumference)
// console.log(circle.area)
