const triviaEasyUrl = 'https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple'
const questionHeader = document.getElementById('question')
const firstOption = document.getElementById('A')
const secondOption = document.getElementById('B')
const thirdOption = document.getElementById('C')
const fourthOption = document.getElementById('D')

async function fetchData() {
    let response = await fetch(triviaEasyUrl)
    let data = await response.json()
    return data.results
    
}

fetchData().then((res) => {
    console.log(res[0])
    questionHeader.innerHTML = res[0].question
    firstOption.innerHTML = res[0].correct_answer
    secondOption.innerHTML = res[0].incorrect_answers[0]
    thirdOption.innerHTML = res[0].incorrect_answers[1]
    fourthOption.innerHTML = res[0].incorrect_answers[2]

})

