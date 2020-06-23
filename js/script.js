printMessage('Czekam na Twój ruch...');
printMessage('-------------------------');

// gracz wybiera ruch - przed komputerem - jego ruchu nie może jeszcze znać

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

// komputer losowo wybiera ruch

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba przez komputer to: ' + randomNumber);

let playerMove = getMoveName(playerInput);
let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie ma ruchu oznaczonego jako: ' + argMoveId + '. Możesz wybrać: 1, 2 lub 3');
    return 'niewłaściwe zagranie';
  }
}

/* console.log(getMoveName('2')); */
console.log('moves:', playerMove, computerMove);
console.log('Ty zagrałe(a)ś: ' + playerMove);
console.log('computer zagrał: ' + computerMove);

// Wynik gry

let result = displayResult(computerMove, playerMove);

function displayResult(argComputerMove, argPlayerMove) {
	console.log('argumenty: ' + argComputerMove + ', ' + argPlayerMove);
  printMessage('WYNIK POTYCZKI (ja - Ty): ' + argComputerMove + ' - ' + argPlayerMove);

	if(( argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
    printMessage('Gratuluję! Wygrywasz!');
	} else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
    printMessage('Hura! Wygrałem! Ty tym razem przegrywasz :(');
	} else if (playerMove == 'niewłaściwe zagranie' && (argComputerMove == 'kamień' || argComputerMove == 'papier' || argComputerMove == 'nożyce')){
	printMessage('Wygrywam walkowerem, bo zastosowałe(a)ś niewłaściwe zagranie. Masz wybrać cyfrę: 1, 2 lub 3!');
	} else if (argComputerMove == 'niewłaściwe zagranie' && (argPlayerMove == 'kamień' || argPlayerMove == 'papier' || argPlayerMove == 'nożyce')){
	printMessage('Przegrywam, bo zastosowałem niewłaściwe zagranie');
	} else {
	printMessage('Fajnie. Jest remis! Wybraliśmy to samo');
	}
 }