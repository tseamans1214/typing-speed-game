
const userText = document.getElementById('userText');
let testText = document.getElementById('testText').textContent;
let wordsCorrectText = document.getElementById('wordsCorrect').textContent;
let totalWordsText = document.getElementById('totalWords').textContent;
let numCorrectWords = 0;
let totalWords = 0;
document.getElementById('userText').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkSentence();
    }
});
function startGame() {
    // Get a new sentence and display it
    // Display user textbox
    // Start and display a timer
}

function checkSentence() {
    //alert(userText.value);
    // Compares user input and current sentence
    let userWords = userText.value.split(" ");
    let testWords = testText.split(" ");
    //alert("check");
    totalWords += testWords.length;
    // Counts the number of errors
    for (let i=0; i<testWords.length && i<userWords.length; i++) {
        if (testWords[i] === userWords[i]) {
            numCorrectWords++;
        }
    }
    alert(numCorrectWords);
    // Determines where the errors occur
    // Calculates user type speed for sentence
    // Clears userText
    userText.value = "";
    wordsCorrectText = "Words Correct: " + numCorrectWords;
    totalWordsText = "Total Words: " + totalWords;
    numCorrectWords = 0;
    totalWords = 0;
    // Call getNewSentence()
}

function getNewSentence() {
    // Create a random sentence or randomly pull a sentence from a pool
    // Display sentence on screen
}

function endGame() {
    // Stop timer
    // Hide userText
    // Hide testText
    // Show startButton
    // Show percentage of mistakes
    // Show average words per minute
}