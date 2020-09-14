var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

var human = "X";
var ai = "O";
var players = [human, ai];

var w, h;
var offset;
var r_offset;



function setup() {
  createCanvas(400, 400);
  currentPlayer = human;
  w = width / 3;
  h = height / 3;
  
}

function draw() {
  background(140, 0, 240);
  strokeWeight(5);
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var spot = board[i][j];
      var wr = w * j + w / 2;
      var hr = h * i + h / 2;
      if (spot === players[0]) {
        line(wr - w / 4, hr - h / 4, wr + w / 4, hr + h / 4);
        line(wr - w / 4, hr + h / 4, wr + w / 4, hr - h / 4);
      } else if (spot === players[1]) {
        noFill();
        ellipse(wr, hr, w / 2);
      }
    }
  }

  var winner = checkWinner();
  textSize(40);
  fill("white");
  if (winner != null && winner != "tie") {
    noLoop();  
    text("Winner : " + winner, 100, 160);
  }else if (winner == "tie") {
    noLoop();
    text("It's a " + winner, 130, 160);
  }

}