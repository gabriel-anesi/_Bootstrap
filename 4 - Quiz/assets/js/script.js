const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerHTML = 'Reiniciar'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function removeH2() {
    document.getElementById('welcome').style.display = 'none';
}


const questions = [
    {
        question: 'O sistema de grid do Bootstrap é baseado em quantas colunas?',
        answers: [
            { text: '12', correct: true},
            { text: '3', correct: false},
            { text: '6', correct: false},
            { text: '9', correct: false}
        ]
    },
    {
        question: 'Qual classe é usada para criar um grupo de botões?',
        answers: [
            { text: '.group-btn', correct: false},
            { text: '.button-group', correct: false},
            { text: '.group-button', correct: false},
            { text: 'btn-group', correct: true}
        ]
    },
    {
        question: 'Qual classe de botões é usada para criar um botão grande?',
        answers: [
            { text: 'btn-l', correct: false},
            { text: '.btn-l2', correct: false},
            { text: '.btn-large', correct: false},
            { text: '.btn-lg', correct: true}
        ]
    },
    {
        question: 'Qual classe é usada para criar paginação básica?',
        answers: [
            { text: '.pages', correct: false},
            { text: '.page', correct: false},
            { text: '.navigation', correct: false},
            { text: 'pagination', correct: true}
        ]
    },
    {
        question: 'Qual classe é usada para criar um grupo básico de lista?',
        answers: [
            { text: '.grouped-list', correct: false},
            { text: '.group-list', correct: false},
            { text: '.list-group', correct: true},
            { text: '.list-grouped', correct: false}
        ]
    }
]