function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

// Computer move

var computerMove, randomNumber;


randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(('wylosowana liczba to: ' + randomNumber));
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else if (randomNumber == '3') {
  computerMove = 'nożyce';
}
printMessage(('Mój ruch: ' + computerMove));

// Player move

var playerMove, playerInput;

playerInput = window.prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log(('Wpisana odpowiedź to: ' + playerInput));
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'kamień';
}
printMessage(('Twój ruch: ' + playerMove));
