const colors = document.getElementsByTagName(`video`);

const socket = io();
let songFinishedBoardCheck;

window.onload = function() {
  //prevent right click
  document.addEventListener("contextmenu", event => event.preventDefault());
  document.getElementById("my_audio").play();
};

const songEnded = () => {
  let songEnded = true;
  socket.emit("songFinished", songEnded);
  socket.on("songFinished", function(songFinished) {
    console.log("boardtwo song : " + songFinished);
    songFinishedBoardCheck = songFinished;
    if (songFinishedBoardCheck == true) {
      window.location.href = "/thankyou?boardTwo=true";
    }
  });

  window.location.href = "/thankyou?boardTwo=true";

  // window.location.href =
  //   "http://testing-chime.herokuapp.com/thankyou?boardTwo=true";
};

for (let i = 0; i < colors.length; i++) {
  if (i == 0) {
    console.log(colors);
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/exhibit/animations/music/blueOne.wav");
    // x.setAttribute("id", "audio1");
    // document.getElementById("v1").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/1.wav"
      );
      audio.play();
    });
  }
  if (i == 1) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/cork.mp3");
    // x.setAttribute("id", "audio2");
    // document.getElementById("v2").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/2.wav"
      );
      audio.play();
    });
  }
  if (i == 2) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/coins.wav");
    // x.setAttribute("id", "audio3");
    // document.getElementById("v3").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
       "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/3.wav"
      );
      audio.play();
    });
  }
  if (i == 3) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/keys.wav");
    // x.setAttribute("id", "audio4");
    // document.getElementById("v4").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
       "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/4.wav"
      );
      audio.play();
    });
  }
  if (i == 4) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/5.wav"
      );
      audio.play();
    });
  }
  if (i == 5) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
       "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/6.wav"
      );
      audio.play();
    });
  }
  if (i == 6) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
       "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/7.wav"
      );
      audio.play();
    });
  }
  if (i == 7) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
       "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/8.wav"
      );
      audio.play();
    });
  }
  if (i == 8) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/9.wav"
      );
      audio.play();
    });
  }
  if (i == 9) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
       "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/10.wav"
      );
      audio.play();
    });
  }
  if (i == 10) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/11.wav"
      );
      audio.play();
    });
  }
  if (i == 11) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/12.wav"
      );
      audio.play();
    });
  }
  if (i == 12) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/13.wav"
      );
      audio.play();
    });
  }
  if (i == 13) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
       "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/14.wav"
      );
      audio.play();
    });
  }
  if (i == 14) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/15.wav"
      );
      audio.play();
    });
  }
  if (i == 15) {
    // var x = document.createElement("audio");
    // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
    // x.setAttribute("id", "audio5");
    // document.getElementById("v5").appendChild(x);
    colors[i].addEventListener("click", function() {
      var audio = new Audio(
        "https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/16.wav"
      );
      audio.play();
    });
  }
}
