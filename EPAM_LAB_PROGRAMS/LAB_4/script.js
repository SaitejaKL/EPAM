const interestRate = 5;

function calculateProfit() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const resultElement = document.getElementById('result');

    if (!isNaN(initialAmount) && initialAmount > 0) {
        const profit = (initialAmount * interestRate) / 100;
        const totalAmount = initialAmount + profit;

        resultElement.innerHTML = 
            `Initial Amount: $${initialAmount.toFixed(2)}<br>` +
            `Interest Rate: ${interestRate}%<br>` +
            `Profit: $${profit.toFixed(2)}<br>` +
            `Total Amount after Interest: $${totalAmount.toFixed(2)}`;
    } else {
        resultElement.textContent = "Please enter a valid positive number.";
    }
}
