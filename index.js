const inquirer = require('inquirer');
const fs = require('fs').promises
const steps = []


const questions = [
  {
    name: 'title',
    message: 'Please enter a title'
  },
  {
    name:'description',
    message:'please enter a description'
  }
];

function askStartingQuestions() {
  return inquirer.prompt(questions)
}

function askForIntallSteps(initialAnswersObj){
  const addStep = () => {
    return inquirer.prompt({
      name: 'step',
      type: 'list',
      message: 'Please enter the step text'
    }).then(stepAnswerObj => {
      steps.push(stepAnswerObj.step)
    })
  }
  inquirer.prompt({
    name: 'step',
    message: 'Please select an installation step option',
    choices: ['Add and installation step', 'Finish installation steps']
  }).then(choiceAnswer =>{
    switch(choiceAnswer.choice){
      case 'Add an installation step':
        return addStep()
          .then(askForIntallSteps);
          default: 
            return finalQuestions(initialAnswersObj, steps);
    }

  })
}

function finalQuestions(initialAnswers, steps){
  //Final prompt and then end by generating a READme.md file
  console.log('Final prompt')

  const md = `
  # Title
  ${initialAnswers.title}

  # Description
  ${initialAnswers.description}

  # Installation
   ${steps.map(step => `${step}`).join('\n')}
  `

  return fs.writeFile('./README.md', md)
}

function init(){
  askStartingQuestions()
    .then(askForIntallSteps)
    .then(() => {
      console.log('Readme Generated')
    })
}

init();