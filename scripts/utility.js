function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('')
    // console.log(alphabet)

    // get a random index between 0 & 25
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    
    const alphabet = alphabetArray[index];
    // console.log(index, alphabet)
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}