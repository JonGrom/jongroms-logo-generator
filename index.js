//Require necessary pakcages
const { writeFile } = require('fs')
const inquirer = require('inquirer')
const { Circle, Square, Triangle, } = require('./lib/shapes')

//Call constructors based on shape requested
function buildLogo(response){
    let logo
    if (response.shape == 'circle'){
        logo = new Circle(response.text, response.textColor, response.shapeColor)
    } else if (response.shape == 'square'){
        logo = new Square(response.text, response.textColor, response.shapeColor)
    } else if (response.shape == 'triangle'){
        logo = new Triangle(response.text, response.textColor, response.shapeColor)
    }
    return logo
}

//Prompt user for logo info
async function init(){
    const response = await inquirer.prompt([
        {type: 'input', message: 'What is your business acronym? (max of three characters)', name: "text"},
        {type: 'input', message: 'What color is the text (by name or "#<6-hexcode-digits>")?', name: "textColor"},
        {type: 'list', message: 'Choose a shape for your logo!', name: "shape", choices: ['circle', 'square', 'triangle']},
        {type: 'input', message: 'What color is the shape (by name or hexcode digits)?', name: "shapeColor"},
    ])
    const logo = buildLogo(response)
    writeFile(`logo.svg`, logo.renderShape(), (err) => {
        err ? console.lo
        (err) : console.log('logo generated')
    })
}

//Begin program
init()