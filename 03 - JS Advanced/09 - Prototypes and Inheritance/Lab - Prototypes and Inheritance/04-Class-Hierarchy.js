function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        transformUnits(unitInCm) {
            return (
                this.units == 'm' ? unitInCm / 100 :
                    this.units == 'mm' ? unitInCm * 10 :
                        unitInCm
            )
        }

        get area() {
            throw new Error("Not implemented figure");
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} -`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            let radius = this.transformUnits(this.radius);
            return Math.PI * radius * radius;
        }

        toString() {
            let radius = this.transformUnits(this.radius);
            return `${super.toString()} radius: ${radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let width = this.transformUnits(this.width);
            let height = this.transformUnits(this.height);
            return width * height;
        }

        toString() {
            let width = this.transformUnits(this.width);
            let height = this.transformUnits(this.height);
            return `${super.toString()} width: ${width}, height: ${height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let classes = solve();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50




