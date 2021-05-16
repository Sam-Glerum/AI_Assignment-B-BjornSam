const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function pickRandomNumbers(amountOfNumbers) {
    let arrayOfNumbers = [];

    for (let i = 0; i < amountOfNumbers; i++) {
        if (random(0, 2) === 1) {
            arrayOfNumbers.push(pickDigitFromOneToTen());
        } else {
            arrayOfNumbers.push(pickDigitMultipleOfTwentyFive())
        }
    }

    console.log(arrayOfNumbers);
    return (arrayOfNumbers);
}
//==========================================
function pickDigitFromOneToTen() {
    return random(1, 11);
}

function pickDigitMultipleOfTwentyFive() {
    let min = 25;
    let multiplyBy = random(1, 5);
    return (min * multiplyBy);
}

function createResultIntegers(amountOfResultIntegers) {
    let numberString = "";
    for (let i = 0; i < amountOfResultIntegers; i++) {
        numberString += random(0, 10);
    }

    console.log(parseInt(numberString));
    return parseInt(numberString);
}
//==========================================
createResultIntegers(3);
pickRandomNumbers(6);
