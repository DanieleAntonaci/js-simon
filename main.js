const container = document.getElementById('container');
const btn = document.getElementById('button-play');



btn.addEventListener('click', function () {

    // create new div e array
    container.innerHTML = '';
    let createDiv = document.createElement('div');
    let numGame = createArrayNum(5, 1, 100);
    createDiv.innerHTML = numGame;
    container.append(createDiv);
    console.log(numGame);

    // set timeout of 30 sec, with if win or loose
    setTimeout(() => {
        // momentanemante ho risolto cosi' visto che il prompt mi da problemi
        createDiv.innerHTML = "";
    }, 30000);
    setTimeout(() => {
        let arrayResult = [];
        for (let i = 0; i < numGame.length; i++) {
            let result = parseInt(prompt(`Inserisci il num ${i + 1}`));
            arrayResult.push(result);
        };
        for (let i = 0; i < numGame.length; i++) {
            if (numGame[i] == arrayResult[i]) {
                console.log('Hai Vinto!');

            } else {
                console.log('Hai perso!');
            }
        }
    }, 30010);
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