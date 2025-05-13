function play()
{
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    //step-1:generate a random alphabet
    const alphabet=getRandomAlphabet();
    console.log('your random alphabet',alphabet);

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
