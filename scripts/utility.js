function play() {
    // Hide everything else and show the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // Reset score and life
    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0);

    continueGame();
}

function continueGame() {
    // Step 1: Generate a random alphabet
    const alphabet = getRandomAlphabet();

    // Step 2: Set the alphabet on screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Step 3: Highlight the expected key
    addBackgroundColorById(alphabet);
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const index = Math.floor(Math.random() * alphabets.length);
    return alphabets[index];
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key.toLowerCase(); // Normalize input
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase();

    // Ignore non-alphabet keys
    if (!/^[a-z]$/.test(playerPressed)) return;

    if (playerPressed === expectedAlphabet) {
        // Correct key press
        const currentScore = getTextElementValueById('current-score');
        setTextElementById('current-score', currentScore + 1);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        // Incorrect key press
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementById('current-life', newLife);

        if (newLife === 0) {
            gameOver();
        }
    }
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // Update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementById('last-score', lastScore);

    // Clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet').toLowerCase();
    removeBackgroundColorById(currentAlphabet);
}


function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    return parseInt(element.innerText);
}

function getElementTextById(elementId)
{
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;
}

// Start listening for key presses
document.addEventListener('keyup', handleKeyboardButtonPress);
