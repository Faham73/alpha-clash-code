function handleKeyboardKeyUpEvent(event) {
    const pressed = event.key;
    console.log('player pressed ', pressed)

    // stop the game if pressed 'Esc'
    if (pressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabet = currentAlphabetElement.innerText
    expectedAlphabet = currentAlphabet.toLowerCase()
    console.log(pressed, expectedAlphabet);
    // console.log(currentAlphabetElement.innerText);

    // check matched or not
    if (pressed === expectedAlphabet) {
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        // --------------------------------------
        // // update score:
        // // get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // update the score by 1
        // const newScore = currentScore + 1;

        // // show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed');

        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if(updatedLife == 0){
            gameOver();
        }
        // ---------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }
}
// Capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    const alphabet = getARandomAlphabet()
    console.log(alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}



function play() {
    // step-1: hide the home screen
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden')

    // const playGround = document.getElementById('play-ground')
    // playGround.classList.remove('hidden')
    // console.log(homeSection.classList)
    
    // Hide 
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score', 0)


    continueGame();
}

function gameOver() {
    // step-1: hide the play ground
    hideElementById('play-ground')
    showElementById('final-score')
    
    // Update final score
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore);
    setTextElementValueById('last-score', lastScore)
    
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet')
    console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet)
}