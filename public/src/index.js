const triviaEasyUrl = 'https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple'
const questionHeader = document.getElementById('question')
const firstOption = document.getElementById('A')
const secondOption = document.getElementById('B')
const thirdOption = document.getElementById('C')
const fourthOption = document.getElementById('D')

//Current question number that the user is on (range is from 0-9 so 10 questions in total)
let currQuestionNum = 0;

//Async function to fetch the data from the API
async function fetchData() {
    let response = await fetch(triviaEasyUrl)
    let data = await response.json()
    return data.results
}

//Main function for the game
fetchData().then((res) => {
    console.log(res[currQuestionNum])
    questionHeader.innerHTML = res[currQuestionNum].question
    firstOption.innerHTML = res[currQuestionNum].correct_answer
    secondOption.innerHTML = res[currQuestionNum].incorrect_answers[0]
    thirdOption.innerHTML = res[currQuestionNum].incorrect_answers[1]
    fourthOption.innerHTML = res[currQuestionNum].incorrect_answers[2]
    firstOption.addEventListener('click', () => {
        if(checkAnswer(res[currQuestionNum].correct_answer, res[currQuestionNum].correct_answer)) {
            currQuestionNum++;
            console.log("clicked");
            update(res[currQuestionNum].question, res[currQuestionNum].correct_answer, res[currQuestionNum].incorrect_answers)
        }
    })
})

//Check if the selected answer by the user is correct
const checkAnswer = (choice, answer) => {
    return choice === answer
}


//Update the page with new questions and set of answers
const update = (question, correctAns, wrongAns) => {
    questionHeader.innerHTML = question
    firstOption.innerHTML = correctAns
    secondOption.innerHTML = wrongAns[0]
    thirdOption.innerHTML = wrongAns[1]
    fourthOption.innerHTML = wrongAns[3]
}

