// Load the document...
document.addEventListener('DOMContentLoaded', () => {
    // Selecting the elements
    const elements = {
        startGameButton: document.getElementById('start-math'),
        gameSection: document.getElementById('game-section'),
        resultSection: document.getElementById('result-section'),
        problemElement: document.getElementById('problem'),
        answerInput: document.getElementById('answer'),
        scoreElement: document.getElementById('score'),
        timeLeftElement: document.getElementById('time-left'),
        playAgainButton: document.getElementById('play-again'),
        keypadButtons: document.querySelectorAll('.keypad-button'),
        enterButton: document.getElementById('enter'),
        clearButton: document.getElementById('clear')
    };
    let score = 0, timeLeft = 30, currentAnswer = 0, timer;

    // Start the game
    const startGame = () => {
        [score, timeLeft] = [0, 30];
        updateUI();
        toggleVisibility(elements.gameSection, elements.resultSection);
        elements.answerInput.value = '';
        elements.answerInput.focus();
        generateProblem();
        timer = setInterval(updateTimer, 1000);
    };

    // Generate random numbers for the math problem
    const generateProblem = () => {
        const [num1, num2] = [randomNumber(), randomNumber()];
        // Add, Sub, Multi, Div Operations
        const operations = {
            addition: { answer: num1 + num2, problem: `${num1} + ${num2}` },
            subtraction: { answer: num1 - num2, problem: `${num1} - ${num2}` },
            multiplication: { answer: num1 * num2, problem: `${num1} * ${num2}` },
            division: { answer: parseFloat((num1 / num2).toFixed(2)), problem: `${num1} / ${num2}` }
        };
        // Drop down selected operations 
        const operation = document.getElementById('operation').value;
        ({ answer: currentAnswer, problem: elements.problemElement.textContent } = operations[operation]);
    };

    // Update the score and show the time left
    const updateUI = () => {
        elements.scoreElement.textContent = `Score: ${score}`;
        elements.timeLeftElement.textContent = `Time Left: ${timeLeft} seconds`;
    };

    // Timer is updated for the game
    const updateTimer = () => {
        if (--timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
        updateUI();
    };

    // Ending the game and then showing the final score
    const endGame = () => {
        toggleVisibility(elements.resultSection, elements.gameSection);
        document.getElementById('final-score').textContent = `Your final score is: ${score}`;
    };

    // Generating random number 1 to 10
    const randomNumber = () => Math.floor(Math.random() * 10) + 1;

    // Toggling between the sections: Show and Hide
    const toggleVisibility = (show, hide) => {
        show.style.display = 'block';
        hide.style.display = 'none';
    };

    // Check if the correct answer is enter each time
    const checkAnswer = () => {
        const answerValue = parseFloat(elements.answerInput.value);
        if (answerValue === currentAnswer) {
            score++;
            generateProblem();
            elements.answerInput.value = '';
            updateUI();
            elements.answerInput.focus();
        }
    };

    elements.answerInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    // Keyboard buttons when clicked
    elements.keypadButtons.forEach(button => {
        button.addEventListener('click', () => {
            elements.answerInput.value += button.value;
            elements.answerInput.focus();
        });
    });

    // Entering the keyboard
    elements.enterButton.addEventListener('click', () => {
        const answerValue = parseFloat(elements.answerInput.value);
        if (answerValue === currentAnswer) {
            score++;
            generateProblem();
            elements.answerInput.value = '';
            updateUI();
        }
    });

    // Clearing the keyboard
    elements.clearButton.addEventListener('click', () => {
        elements.answerInput.value = '';
        elements.answerInput.focus();
    });

    // Click to start the game or play the game again, prevent reloads
    elements.startGameButton.addEventListener('click', (event) => {
        event.preventDefault();
        startGame()
    });
    elements.playAgainButton.addEventListener('click', (event) => {
        event.preventDefault();
        startGame()
    });
});
