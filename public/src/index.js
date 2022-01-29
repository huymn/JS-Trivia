const triviaEasyUrl = 'https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple'
const questionHeader = document.getElementById('question')

async function fetchData() {
    let response = await fetch(triviaEasyUrl)
    let data = await response.json()
    return data.results
    
}

fetchData().then((res) => {
    console.log(res[0].question)
    questionHeader.innerHTML = res[0].question

})

