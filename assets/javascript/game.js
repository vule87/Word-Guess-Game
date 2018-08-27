// What are the riddles?
var answers = {
  
    reflection:{answer:"reflection", riddle:"You saw me where I could not be. Yet, often you see me. What am I?", level:"medium"},
    rainbow:{answer:"rainbow", riddle:"I am beautiful, up in the sky. I am magical, yet I cannot fly. To people I bring luck, to some people, riches. The boy at my end does whatever he wishes. What am I?", level:"easy"},
    comet: {answer:"comet", riddle:"What zips through the sky with a tail of fire and dust. It could be an omen, its origin to discuss?", level:"easy"},
    spine: {answer:"spine", riddle:"This is needed both for courage and hardcover books.", level:"medium"},
    eyes: {answer:"eyes", riddle:"We are two brothers on opposite sides of the road, but we never see each other. Who are we?", level:"medium"},
    sting: {answer:"sting", riddle:"If you're stealing honey, be prepared to receive vengeance in this form", level:"easy"},
    push: {answer:"push", riddle:"It can be done to buttons and shopping carts. What is it?", level:"easy"},
    wine: {answer:"wine", riddle:"The older this thing grows the more valued it becomes. It is always much better when its breathing is done.", level:"medium"},
    laundry: {answer:"laundry", riddle:"When it's dirty this should never be aired in public.", level:"easy"},
    pillow: {answer:"pillow", riddle:"I lose my head in the morning and regain back it at night. What am I?", level:"medium"},
    tennis: {answer:"tennis", riddle:"A sport with love and service played by singles and pairs.", level:"easy"},
    bell: {answer:"bell", riddle:"It is able to speak because it has a hard gone. You know what it is as soon as it has sung. What is it?", level:"medium"},
    wheelbarrow: {answer:"wheelbarrow", riddle:"I have two legs, but they only touch the ground while I'm at rest. What am I?", level:"Hard"},
  };
  
  // Randomize the riddles
  
var keys = Object.keys(answers);
var randomKey = keys[Math.floor(Math.random() * keys.length)];
var random = answers[randomKey];
var ranRid = document.getElementById('riddle').innerHTML = random.riddle;
var ranAns = random.answer;

// Hide the answer
var answerArray = [];
for (var i = 0; i < ranAns.length; i++) {
answerArray[i] = "_ ";
}

// User's guesses
var chosenGuesses = [];
document.onkeyup = function(event){
    var userGuesses = event.key;

    chosenGuesses.push(userGuesses.toUpperCase());

    document.getElementById("guess").innerHTML = chosenGuesses;
    console.log(chosenGuesses);
}

// Display hidden answer
document.getElementById('answer').innerHTML = answerArray.join("");

// Display remaining letters

// var remain = ranAns.length;
// while (remain > 0) {

// for (var j = 0; j < word.length; j++) {
//   if (word[j] === guess) {
//   answerArray[j] = guess;
//   remainingLetters--;
//   }
// }


console.log(answerArray);

console.log(random.level);