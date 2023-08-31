class Shape {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }
    clone() {
        return new Shape(...this)
    }
}

class Rectangle extends Shape {
    constructor(x, y, color, width, height) {
        super(x, y, color)
        this.width = width
        this.height = height
    }
    clone() {
        return new Rectangle(...this)
    }
}

class Circle extends Shape {
    constructor(x, y, color, radius) {
        super(x, y, color)
        this.radius = radius
    }
    clone() {
        return new Circle(...this)
    }
}