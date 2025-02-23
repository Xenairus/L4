function checkEvenOdd() {
    let num = parseInt(prompt("Enter a number:"));
    if (!isNaN(num)) {
        if (num % 2 === 0) {
            alert(num + " is even.");
        } else {
            alert(num + " is odd.");
        }
    } else {
        alert("Please enter a valid number.");
    }
}

function displayNumbers1to10() {
    let output = document.getElementById("1to10");
    let numbers = "";
    for (let i = 1; i <= 10; i++) {
        numbers += i + "<br>";
    }
    output.innerHTML = numbers;
}

