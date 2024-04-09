const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results')
const submitButton = document.querySelector('#submit');

const myQuestions = [
    {
    question: 'Кто изобрёл JavaScript?',
    answers: {
        a: 'Douglas Crockford',
        b: 'Sheryl Sandberg',
        c: 'Brendan Eich'
    },
    correctAnswer: 'c'
    },{
    question: 'Что является пакетным менеджером?',
    answers: {
        a: 'Node.js',
        b: 'TypeScript',
        c: 'npm'
    },
    correctAnswer: 'c'
    },{
    question: 'Инструмент для проверки качества кода?',
    answers: {
        a: 'angular',
        b: 'jQuerry',
        c: 'RequireJs',
        d: 'ESLint'
    },
    correctAnswer: 'd' 
    }
];
function buildQuiz(){
    const output = [];
    myQuestions.forEach((currentQuestion,questionNumber) => {
        const answers = []
        
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type='radio' name='question${questionNumber}' value = '${letter}'>
                ${letter} : 
                ${currentQuestion.answers[letter]}
                </label>`
            );
        };
        output.push(
            `
            <div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers">${answers.join("")} </div>
            </div>`
        )
    }
)
quizContainer.innerHTML = output.join("")
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else{
            answerContainers[questionNumber].style.color = 'red';
        }
    })
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}` 





}
buildQuiz();
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const slides = document.querySelectorAll('.slide')
let currentSlide = 0;

function showSlide(n){
    console.log(slides[currentSlide])
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide')
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = "none";
    } else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block'
    } else{
        nextButton.style.display = 'inline-block'
        submitButton.style.display = 'none'
    }
    
}

showSlide(currentSlide)
function showNextSlide(){
    showSlide(currentSlide + 1)
}

function showPreviousSlide(){
    showSlide(currentSlide - 1)
}

previousButton.addEventListener('click',showPreviousSlide);
nextButton.addEventListener('click',showNextSlide)
submitButton.addEventListener('click', showResults)