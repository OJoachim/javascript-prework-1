function playGame(playerInput) {
  
  /* FUNKCJE POMOCNICZNE */
  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('WYNIK POTYCZKI (ja - Ty): ' + argComputerMove + ' - ' + argPlayerMove);

	 if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') 
      || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') 
      || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
      printMessage('Gratuluję! Wygrywasz!');
	 } else if (argComputerMove === argComputerMove) {
     	printMessage('Fajnie. Jest remis! Wybraliśmy to samo');
	 } else {
     printMessage('Hura! Wygrałem! Ty tym razem przegrywasz :(');
	 }
  }
  
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
  }

  /* PROCES GRY */
  clearMessages();
  // komputer losowo wybiera swój ruch
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let playerMove = getMoveName(playerInput);
  let computerMove = getMoveName(randomNumber);

  // Ustalamy kto wygrał
  displayResult(computerMove, playerMove);
  
  // Dopisz linię
  printMessage('-------------------------------------------------------');
}

// Uruchamianie guzików

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2)
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});