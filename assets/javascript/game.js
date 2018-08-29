// What are the riddles?
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var win = 0;
var lose = 0;
var remain = 9;
resets();


var comChoice = letters[Math.floor(Math.random() * letters.length)];

var guesses = [];
document.onkeyup = function(event){
    var guess = event.key;
    guesses.push(guess);
    document.querySelector("#guess").innerHTML = guesses;
    if (guess == comChoice){
        win++;
        winReset();
    } 
    if (guess !== comChoice){
        remain--;
    }

    if (remain === 0){
        lose++;
        resets();
    }  
    document.querySelector("#losing").innerHTML = lose;
    document.querySelector("#remainer").innerHTML = remain;
    document.querySelector("#winning").innerHTML = win;
}


function resets () {
    remain = 9;
    guesses = [];
    // var comChoice = letters[Math.floor(Math.random() * letters.length)];
}

function winReset(){
    comChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(comChoice);
}


console.log(comChoice);

