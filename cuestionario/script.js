const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById ('answer-buttons')


let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)


function startGame(){
console.log('Comienza')
startButton.classList.add('hide')
shuffledQuestions = questions.sort (()=> Math.random() - .5)
currentQuestionsIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion(){
showQuestion(shuffledQuestions[currentQuestionsIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => { const button = document.createElement
    ('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)

})

}

function selectAnswer(){


}
const questions = [
    {
        question: "¿Cuánto es 2 + 2?",
    answer: [
        { Text: '4', correct:true },
        { Text: '22', correct:false }
    
    ]    
    }    
   
]
