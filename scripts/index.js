// Updating three different quotes
document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "\"I've never had more fun than I do playing Anagram Hunt. It is the best game ever invented!\" - Justin Jest",
        "\"Math Facts Practice! Let's go!\" - Jack Johnson",
        "\"Anagram Hunt or Math Facts Practice!!? Math it is!!\" - Jones Jefferson"
    ];
    let firstQuote = 0;
    const displayElement = document.getElementById("quote");

    // Setting intervals to 10 seconds
    setInterval(() => {
        firstQuote = (firstQuote + 1) % quotes.length;
        displayElement.textContent = quotes[firstQuote];
    }, 10000);
});