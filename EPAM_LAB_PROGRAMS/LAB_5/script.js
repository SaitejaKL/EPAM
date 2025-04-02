function reverseInteger(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return num < 0 ? -reversed : reversed;
}

function reverseNumber() {
    const userInput = document.getElementById('numberInput').value;
    const number = parseInt(userInput, 10);
    const resultElement = document.getElementById('result');

    if (!isNaN(number)) {
        resultElement.textContent = "Reversed Number: " + reverseInteger(number);
    } else {
        resultElement.textContent = "Please enter a valid integer.";
    }
}
