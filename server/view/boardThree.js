const colors = document.getElementsByTagName(`video`);
const socket = io();
let welcomeBtnClickedBoardCheck;
let songFinishedBoardCheck;

//
window.onload = function() {
  //welcome button clicked
  // socket.emit("welcomeBtnClicked");
  socket.on("welcomeBtnClicked", function(welcomeBtnClicked) {
    console.log("boardThree : " + welcomeBtnClicked);
    welcomeBtnClickedBoardCheck = welcomeBtnClicked;
    console.log("welcome btn from sockets : " + welcomeBtnClicked);
    if (welcomeBtnClickedBoardCheck == false) {
      document.getElementById("boardThreeBody").style.visibility = "hidden";
    } else {
      document.getElementById("boardThreeBody").style.visibility = "visible";
    }
  });

  //music ended
  // socket.emit("songFinished");
  socket.on("songFinished", function(songFinished) {
    console.log("boardThree song : " + songFinished);
    songFinishedBoardCheck = songFinished;
    if (songFinishedBoardCheck == false) {
      //dont do anything
    } else {
      // window.location.pathname = "/thankyou?boardThree=true";
      // else move onto the thank you page
      window.location.href =
        "http://testing-chime.herokuapp.com/thankyou?boardThree=true";
    }
  });
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/blueOne.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/blueTwo.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/blueThree.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/blueFour.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/greenOne.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/greenTwo.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/greenThree.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/greenFour.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/redOne.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/redTwo.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/redThree.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/redFour.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/yellowOne.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/yellowTwo.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/yellowThree.wav"
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
        "https://mysound.cad.rit.edu/exhibit/animations/music/yellowFour.wav"
      );
      audio.play();
    });
  }
}
