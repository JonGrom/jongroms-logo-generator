//make shapes as modular classes
//test shapes
//make inquirer for questions
//test inquirer
//make 
const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Square, Triangle, } = require('./lib/shapes')

function validateColor(color){
    if ((typeof color) === 'number'){
        color = `#${color}`
        console.loge(color, color.length)
    } else {
        console.log(typeof color)
    }

}

function validateResponse(response){
    
}
//begin program

function buildLogo(logo){
    if (response.shape == 'circle'){
        logo = new Circle(response.text, response.textColor, response.shapeColor)
    } else if (response.shape == 'square'){
        logo = new Square(response.text, response.textColor, response.shapeColor)
    } else if (response.shape == 'triangle'){
        logo = new Triangle(response.text, response.textColor, response.shapeColor)
    }
}

async function init(){
    const response = await inquirer.prompt([
        {type: 'input', message: 'What is your business acronym? (max of three characters)', name: "text"},
        {type: 'input', message: 'What color is the text (by name or "#<6-hexcode-digits>")?', name: "textColor"},
        {type: 'list', message: 'Choose a shape for your logo!', name: "shape", choices: ['circle', 'square', 'triangle']},
        {type: 'input', message: 'What color is the shape (by name or hexcode digits)?', name: "shapeColor"},
    ])
    const logo = buildLogo(response)
    console.log(response)
    
    // .then(validateResponse(response))
}

init()