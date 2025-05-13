function play()
{
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    //step-1:generate a random alphabet
    const alphabet=getRandomAlphabet();
    //console.log('your random alphabet',alphabet);

    //set randomly generated alphabet to the screen(show it)
    const curentAlphabetElement=document.getElementById('current-alphabet');
    curentAlphabetElement.innerText=alphabet;
    //set bagkround color
addBackgroundColorById(alphabet)
}
function hideElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden');
}
function showElementById(elementId)
{
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getRandomAlphabet()
{    
    //Get or create an alphabet array
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphaets=alphabetString.split('');
    //console.log(alphaets);
    //get a random index between 0-25
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    const  alphabet=alphaets[index];
    //console.log(index,alphabet);
    return alphabet;
}

function addBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function handleKeyboardButtonPress(event)
{
    const playerpressed=event.key;
    console.log('Player Pressed',playerpressed);

    //Get the expected to press 
    const curentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=curentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLocaleLowerCase();
    console.log(playerpressed,expectedAlphabet);

    //check matched or not
    if(playerpressed===expectedAlphabet)
    {
        console.log('you get a point');
        //update score
        //1. get the current score
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore);
        //2. increase the score by 1
        const newScore=currentScore+1;
        //3. show the update score
        currentScoreElement.innerText=newScore;

        //start a new riund
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed,you lost a life');
        //step-1: get the current life
         const currentLifeElement=document.getElementById('current-life');
         const currentLifetext=currentLifeElement.innerText;
         const currentLife=parseInt(currentLifetext);
        //step-2: reduce the life count
        const newLife=currentLife-1;

        //step-3: display the updated life count
        currentLifeElement.innerText=newLife;
    }
}
//capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress)