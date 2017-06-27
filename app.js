document.addEventListener("DOMContentLoaded", function(event) {
  var newInput = document.createElement("input");
  console.log(newInput);
  var newBody = document.querySelector("body");
  console.log(newBody);
  newBody.appendChild(newInput);
  newInput.value = "100";
  newInput.style.margin = "100px 10px 100px 530px";
  newInput.style.borderColor = "black";

  var scores = [0, 0];
  var roundScore = 0;
  var activePlayer = 0;


  var buttonRoll = document.querySelector(".btn-roll");
  var picture = document.querySelector("img");
  var buttonHold = document.querySelector(".btn-hold");
  var buttonNewGame = document.querySelector(".btn-new");


  newInput.addEventListener("change", function() {
    alert("you have changed fianal score to win");



  });









  start();

  function start() {
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";
  }
  picture.style.display = "none";
  var dice6 = 0;

  buttonRoll.addEventListener("click", function() {

    var dice = Math.floor((Math.random() * 6) + 1);

    if (dice == 6) {
      dice6 = dice6 + dice;
    } else {
      dice6 = 0;
    }

    picture.style.display = "block";
    picture.src = "dice-" + dice + ".png";





    if (dice !== 1 && dice6 !== 12) {

      roundScore = roundScore + dice;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else if (dice6 == 12) {
      document.querySelector("#score-" + activePlayer).textContent = "0";
      pigGame();
    } else {
      pigGame();

    }


  });



  buttonHold.addEventListener("click", function() {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    picture.style.display = "none";
    if (scores[activePlayer] >= newInput.value) {
      document.querySelector("#name-" + activePlayer).textContent = "WINNER!";


    } else {
      pigGame();
    }
  });

  buttonNewGame.addEventListener("click", function() {
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    start();
    if (activePlayer = 1) {
      activePlayer = 0;
    }

  });

  function pigGame() {
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    if (activePlayer == 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  }






});
