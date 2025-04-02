function filterArray(array) {
    return array.filter(element => element >= 0);
}

function displayFilteredArray() {
    const userInput = document.getElementById('userInput').value;
    const resultElement = document.getElementById('result');

    const numberArray = userInput.split(',')
                                  .map(num => parseInt(num.trim()))
                                  .filter(num => !isNaN(num));

    if (numberArray.length > 0) {
        const filteredArray = filterArray(numberArray);
        resultElement.textContent = `Filtered Array: [${filteredArray.join(', ')}]`;
    } else {
        resultElement.textContent = "Please enter valid numbers.";
    }
}
