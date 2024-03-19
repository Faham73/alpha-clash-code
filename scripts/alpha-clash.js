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
