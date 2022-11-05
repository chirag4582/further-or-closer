const menu = document.getElementById('menu');
const playAgain = document.getElementById('play-again');
menu.onclick=()=>{window.location.href="./index.html"};
playAgain.onclick=()=>{window.location.href="./game.html"};
const text = document.getElementById("score-num")
text.innerHTML = localStorage.getItem('score')