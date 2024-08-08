class Shape{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };
    renderShape(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        ${this.svg}${this.shapeColor}"/>
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `
    };
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.svg = `<circle cx="150" cy="100" r="80" fill="`;
    };
}

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.svg = `<rect x="60" y="10" rx="200" ry="200" fill="`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.svg = `<polygon points="150, 18 244, 182 56, 182" fill="`;
    }
}

module.exports = { Circle, Square, Triangle }