const triviaEasyUrl = 'https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple'
const questionHeader = document.getElementById('question');

async function fetchText() {
    let response = await fetch(triviaEasyUrl)
    let data = await response.json();
    console.log(data.results[1].question);
    questionHeader.innerHTML = data.results[1].question
}

fetchText();