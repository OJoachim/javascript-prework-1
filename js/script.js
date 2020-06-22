printMessage('Czekam na Twój ruch...');
printMessage('------------------------------');

// gracz wybiera ruch - przed komputerem - jego ruchu nie może jeszcze znać

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'niewłaściwe zagranie';

if(playerInput == 1) {
	playerMove = 'kamień';
	
} else if(playerInput == 2) {
	playerMove = 'papier';
	
} else if(playerInput == 3) {
	playerMove = 'nożyce';
	
} else if(playerInput !== 3 && playerInput !== 2 && playerInput !== 1) {
	playerMove = 'niewłaściwe zagranie';
}

printMessage('Twój ruch to: ' + playerMove);
printMessage('------------------------------');

// komputer losowo wybiera ruch

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
	computerMove = 'kamień';
	
} else if(randomNumber == 2) {
	computerMove = 'papier';
	
} else if(randomNumber == 3) {
	computerMove = 'nożyce';
	
} else if(randomNumber !== 3 && randomNumber !== 2 && randomNumber !== 1) {
	computerMove = 'nieznany ruch';
}

printMessage('Mój ruch to: ' + computerMove);
printMessage('------------------------------');
printMessage('WYNIK POTYCZKI:');

// Wynik gry:

if(( computerMove == 'kamień' && playerMove == 'papier') || ( computerMove == 'nożyce' && playerMove == 'kamień') || ( computerMove == 'papier' && playerMove == 'nożyce')){
  printMessage('Gratuluję! Wygrywasz!');
} else if(( computerMove == 'papier' && playerMove == 'kamień') || ( computerMove == 'kamień' && playerMove == 'nożyce') || ( computerMove == 'nożyce' && playerMove == 'papier')){
  printMessage('Hura! Wygrałem!');
} else if(( computerMove == 'kamień' && playerMove == 'kamień') || ( computerMove == 'papier' && playerMove == 'papier') || ( computerMove == 'nożyce' && playerMove == 'nożyce') || ( computerMove == 'nieznany ruch' && playerMove == 'niewłaściwe zagranie')){
  printMessage('Fajnie. Jest remis! Wybraliśmy to samo');
} else if( playerMove == 'niewłaściwe zagranie' && (computerMove == 'kamień' || computerMove == 'papier' || computerMove == 'nożyce')){
  printMessage('Wygrywam walkowerem, bo zastosowałe(a)ś niewłaściwe zagranie. Masz wybrać cyfrę: 1, 2 lub 3!');
} else if( computerMove == 'nieznany ruch' && (playerMove == 'kamień' || playerMove == 'papier' || playerMove == 'nożyce')){
  printMessage('Przegrywam, bo zastosowałem nieznany ruch');
}