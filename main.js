const container = document.getElementById('container');
const btn = document.getElementById('button-play');
const input = document.getElementById('number');
const btnResult = document.getElementById('btn-result');
let result = document.getElementById('result');
let arrayResult = [];


btn.addEventListener('click', function () {

    // create new div e array
    container.innerHTML = '';
    let createDiv = document.createElement('div');
    let numGame = createArrayNum(5, 1, 100);
    createDiv.innerHTML = numGame;
    container.append(createDiv);
    console.log(numGame);
    arrayResult = [];
    result.innerHTML = '';
    input.classList.add('hidden');
    btnResult.classList.add('hidden');
    let win;


    setTimeout(() => {
        container.innerHTML = "";
        input.classList.remove('hidden');
        btnResult.classList.remove('hidden');
    }, 30000);

    btnResult.addEventListener('click', function () {
        console.log(input.value);
        arrayResult.push(input.value);

        if (5 === arrayResult.length) {
            input.classList.add('hidden');
            btnResult.classList.add('hidden');
            win = true;

            for (let i = 0; i < numGame.length; i++) {
                if (numGame[i] != arrayResult[i]) {
                    win = false
                }
                else {
                    container.append(arrayResult[i] + '; ');
                }
            };
            if (win) {
                result.innerHTML = 'Hai vinto!'
            } else if (!win) {
                result.innerHTML = 'Hai perso!';
            }
        }
    })
});



// function

// funzionrandom number
function randomNumber(min, max) {
    let randomNum = Math.floor(Math.random() * ((max + 1) - min) + min);
    return randomNum
}

function createArrayNum(numPossibility, minNum, maxNum) {
    let arrayNumb = [];
    while (arrayNumb.length < numPossibility) {
        let randomNumForArray = randomNumber(minNum, maxNum);
        if (!arrayNumb.includes(randomNumForArray))
            arrayNumb.push(randomNumForArray);
    }
    return arrayNumb;
};