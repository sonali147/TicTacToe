function equals(a,b,c){
  return a==b && b==c && a!="" 
}

function checkWinner() {
  var winner = null;

  for (i = 0; i < 3; i++) {
    if (equals(board[0][i],board[1][i],board[2][i])) {
      winner = board[0][i];
    }
  }

  for (i = 0; i < 3; i++) {
    if (equals(board[i][0], board[i][1],board[i][2])) {
      winner = board[i][0];
    }
  }

  if (equals(board[0][0],board[1][1],board[2][2]) ||
    equals(board[2][0], board[1][1],board[0][2] )) {
    winner = board[1][1];
  }
  var openSpots = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if(board[i][j] == ""){
        openSpots.push([i, j]);
      }
    }
  }
  if(winner == null && openSpots.length ==0) {
    return "tie";
  } else {
    return winner;
  }
}


function nextTurn() {
  var available = [];
  
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if(board[i][j] == ""){
        available.push([i, j]);
      }
    }
  }
  if (available.length != 0) {
    spot = random(available);
    var i = spot[0];
    var j = spot[1];
    board[i][j] = currentPlayer;
    currentPlayer = human;
  }
}

function mousePressed(){
  if(currentPlayer == human){
    var j = floor(mouseX/w);
    var i = floor(mouseY/h);
    if(board[i][j] == ""){
      board[i][j] = human;
      currentPlayer = ai;
      nextTurn();
    }
  }
}
