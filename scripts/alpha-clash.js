function handleKeyboardKeyUpEvent(event){
    const pressed = event.key;
    console.log('player pressed ', pressed)

    const currentAlphabetElement = document.getElementById('current-alphabet') 
    currentAlphabet = currentAlphabetElement.innerText
    expectedAlphabet = currentAlphabet.toLowerCase()
    console.log(pressed, expectedAlphabet);
    // console.log(currentAlphabetElement.innerText);

    // check matched or not
    if(pressed  === expectedAlphabet ){
        console.log('you get a point');
        console.log("you have pressed correctly", expectedAlphabet)
        continueGame();
        removeBackgroundColorById(expectedAlphabet)
    }
    else{
        console.log('you missed');
    }
}
// Capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    const alphabet = getARandomAlphabet()
    console.log(alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}



function play(){
    // step-1: hide the home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden')

    const playGround = document.getElementById('play-ground')
    playGround.classList.remove('hidden')
    // console.log(homeSection.classList)
    continueGame()
}
