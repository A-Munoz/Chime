let counter = 0;
const myTimer = setInterval(countdown, 1000);

function countdown() {
  counter += 1;
  if (counter === 10) {
    console.log('timeout');
    clearInterval(myTimer);
    window.location.pathname = '/welcome';
  }
}

window.onload = myTimer;

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//     clearInterval(myVar);
// }
