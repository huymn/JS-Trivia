const triviaEasyUrl = 'https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple'
const questionHeader = document.getElementById('question')
const firstOption = document.getElementById('A')
const secondOption = document.getElementById('B')
const thirdOption = document.getElementById('C')
const fourthOption = document.getElementById('D')

//Using the unorm library to normalize unicode characters
let unorm = require('unorm')

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
    //Log to check
    console.log(res[currQuestionNum])

    //Current question
    let question = res[currQuestionNum].question

    //Correct answer
    let correctAnswer = res[currQuestionNum].correct_answer

    //All answers
    let answers = res[currQuestionNum].incorrect_answers
    answers.push(correctAnswer)

    //Initial display update
    update(question, shuffle(answers))

    //Variable to track which option the user picked
    let selectedAnswer = "";

    //When "A" is picked
    firstOption.addEventListener('click', () => {
        //Check if the user has answer 10 questions
        if(checkEndGame(currQuestionNum)) {
            console.log("You've won")
        }
        else {
            selectedAnswer = firstOption.innerHTML
            if(checkAnswer(selectedAnswer, correctAnswer)) {
                currQuestionNum++;
                console.log("clicked");
                console.log(res[currQuestionNum])
                //Next question
                question = res[currQuestionNum].question
    
                //Next correct answer
                correctAnswer = res[currQuestionNum].correct_answer
    
                //Next answer choices
                let newAnswers = res[currQuestionNum].incorrect_answers
                newAnswers.push(correctAnswer)
    
                //Update the UI
                update(question, shuffle(newAnswers))
            }
            else {
                console.log("you picked the wrong answer")
            }
        }
    })

    //When "B" is picked
    secondOption.addEventListener('click', () => {
        //Check if the user has answer 10 questions
        if(checkEndGame(currQuestionNum)) {
            console.log("You've won")
        }
        else {
            selectedAnswer = secondOption.innerHTML
            if(checkAnswer(selectedAnswer, correctAnswer)) {
                currQuestionNum++;
                console.log("clicked");
                console.log(res[currQuestionNum])
                //Next question
                question = res[currQuestionNum].question
    
                //Next correct answer
                correctAnswer = res[currQuestionNum].correct_answer
    
                //Next answer choices
                let newAnswers = res[currQuestionNum].incorrect_answers
                newAnswers.push(correctAnswer)
    
                //Update the UI
                update(question, shuffle(newAnswers))
            }
            else {
                console.log("you picked the wrong answer")
            }
        }
    })

    //When "C" is picked
    thirdOption.addEventListener('click', () => {
        //Check if the user has answer 10 questions
        if(checkEndGame(currQuestionNum)) {
            console.log("You've won")
        }
        else {
            selectedAnswer = thirdOption.innerHTML
            if(checkAnswer(selectedAnswer, correctAnswer)) {
                currQuestionNum++;
                console.log("clicked");
                console.log(res[currQuestionNum])
                //Next question
                question = res[currQuestionNum].question
    
                //Next correct answer
                correctAnswer = res[currQuestionNum].correct_answer
    
                //Next answer choices
                let newAnswers = res[currQuestionNum].incorrect_answers
                newAnswers.push(correctAnswer)
    
                //Update the UI
                update(question, shuffle(newAnswers))
            }
            else {
                console.log("you picked the wrong answer")
            }
        }
    })

    //When "D" is picked
    fourthOption.addEventListener('click', () => {
        //Check if the user has answer 10 questions
        if(checkEndGame(currQuestionNum)) {
            console.log("You've won")
        }
        else {
            selectedAnswer = fourthOption.innerHTML
            if(checkAnswer(selectedAnswer, correctAnswer)) {
                currQuestionNum++;
                console.log("clicked");
                console.log(res[currQuestionNum])
                //Next question
                question = res[currQuestionNum].question
    
                //Next correct answer
                correctAnswer = res[currQuestionNum].correct_answer
    
                //Next answer choices
                let newAnswers = res[currQuestionNum].incorrect_answers
                newAnswers.push(correctAnswer)
    
                //Update the UI
                update(question, shuffle(newAnswers))
            }
            else {
                console.log("you picked the wrong answer")
            }
        }
    })
})

//Check if the selected answer by the user is correct
const checkAnswer = (choice, answer) => {
    return unorm.nfc(choice) === unorm.nfc(answer)
}


//Update the page with new questions and set of answers
const update = (question, answers) => {
    questionHeader.innerHTML = question
    firstOption.innerHTML = answers[0]
    secondOption.innerHTML = answers[1]
    thirdOption.innerHTML = answers[2]
    fourthOption.innerHTML = answers[3]
}

//Shuffle array of answers
//Found from this stackoverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

//Check when the user has answer 10 questions
const checkEndGame = (number) => {
    return number === 10
}
