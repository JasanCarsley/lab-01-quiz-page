// import functions and grab DOM elements
import { countsAsAYes } from './counts-as-a-yes.js';


// initialize state
const button = document.getElementById('launch-button');
const results = document.getElementById('Quiz Results');

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const userName = prompt('What is your name?');

    const userHasConfirmed = confirm('Do you really want to take the quiz?');
    
    if (!userHasConfirmed) {
        alert('You have opted out of the quiz!');
        return;
    }


    let correctAnswers = 0;


    const muleDeerSize = prompt(`Okay ${userName}! Is the mule deer larger than a white tail deer?`);

    if (countsAsAYes(muleDeerSize)) {
        correctAnswers++;
    }

    const muleDeerRuns = prompt(`Okay ${userName}! When a mule deer runs is it called stotting?`);

    if (countsAsAYes(muleDeerRuns)) {
        correctAnswers++;
    }

    const muleDeerAntlers = prompt(`Okay ${userName}! Do mule deer shed thier antlers every year?`);

    if (countsAsAYes(muleDeerAntlers)) {
        correctAnswers++;
    }

    alert(`Quiz complete. Check the page for results`);

    results.textContent = `Okay ${userName}, you got ${correctAnswers} correct out of 3!`;
});
