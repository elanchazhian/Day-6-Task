class Circle {
    constructor(radius,color) {
        this.setRadius(radius);
        this.setColor(color);
    }

    //function to get radius value with number as return type
    getRadius() {
        return this.radius;
    }

    //function to set radius value
    setRadius(newRadius) {
        newRadius = newRadius;
        this.radius = newRadius;
    }

    //function to get color value
    getColor() {
        return this.color;
    }

    //function to set the color value
    setColor(newColor) {
        newColor = newColor.trim();
        this.color = newColor;
    }
   
  

    Circle(radius,color){
        this.radius=radius
        this.color=color
        return `
        radious: ${this.radius}
        color: ${this.radius}
        `
    }

    //To return string of member variables value
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`
    }

    //To compute and return circle area using radius
    getArea(){
        return Math.PI*Math.pow(this.radius, 2)
    }

    //To compute and return circle circumference using radius
    getCircumference(){
        return 2*Math.PI*this.radius
    }
}

let circle1 = new Circle(1.0,"Red");
console.log(circle1); // Jane Doe

circle1.setColor('Blue');
console.log(circle1.getColor()); 
console.log(circle1.Circle(2.4,'Green'));
console.log(circle1.toString());
console.log(circle1.getArea());
console.log(circle1.getCircumference());
