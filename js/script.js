function playGame(playerInput){

  function clearMessages() {}

  // gracz wybiera ruch zanim wybierze komputer
  console.log('Gracz wpisał: ' + playerInput);

  // komputer losowo wybiera ruch
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

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

}

// Uruchamianie guzików

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
  printMessage('-------------------------------------------------------');
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2)
  printMessage('-------------------------------------------------------');;
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
  printMessage('-------------------------------------------------------');
});