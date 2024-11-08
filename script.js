var randomno = 0;

let timer = 60;
var scored = 0;
function bubble() {
  const lowerbox = document.querySelector(".lowbox");
  var clutter = "";
  for (let i = 1; i <= 132; i++) {
     var targetno = Math.floor(Math.random() * 10 + 1);
    clutter += `<div class="circleno">${targetno}</div>`;
  }
  lowerbox.innerHTML = clutter;
}
function timewatch() {
  var intervalTime = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeperiod").textContent = timer;
    } else {
      clearInterval(intervalTime);
      console.log("cleared");
      document.querySelector('.lowbox').innerHTML=`<h1>GAME OVER<H1>. YOUR SCORE${scored}`;
     
    }
  }, 1000);
}
function hit() {
  randomno = Math.floor(Math.random() * 10 + 1);
  document.querySelector("#hitscore").textContent = randomno;
}

function scoreboard() {
  scored += 10;
  document.querySelector("#scores").textContent = scored;
  console.log("chl gya");
}
document.querySelector(".lowbox").addEventListener("click", function (details) {
  let hitted = Number(details.target.textContent);
  //console.log(hitted)
  if (hitted === randomno) {
    // alert('you hitted right one');
    scoreboard();
    bubble();
    hit();
  }
});
timewatch();
hit();
bubble();
