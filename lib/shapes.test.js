// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
const { Circle, Square, Triangle, } = require('./shapes')

describe( 'Shapes', () => {
    describe( 'Circle', () => {
        it('should render an svg in a particular format', () => {
            logo = new Circle('AOG', 'white', 'red')
            expect(logo.renderShape()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AOG</text></svg>')
        })
    })
    describe( 'Square', () => {
        it('should render an svg in a particular format', () => {
            logo = new Square('AOG', 'white', 'red')
            expect(logo.renderShape()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" width="200" height="200"  fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AOG</text></svg>`)
        })
    })
    describe( 'Triangle', () => {
        it('should render an svg in a particular format', () => {
            logo = new Triangle('AOG', 'white', 'red')
            expect(logo.renderShape()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red"/><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">AOG</text></svg>`)
        })
    })
} )
