const colors = document.getElementsByTagName('video');
const socket = io();
let welcomeBtnClickedBoardCheck;
let songFinishedBoardCheck;

//
window.onload = function () {
    // prevent right click
    document.addEventListener('contextmenu', event => event.preventDefault());
    // welcome btn pressed
    // socket.emit("welcomeBtnClicked");
    socket.on('welcomeBtnClicked', (welcomeBtnClicked) => {
        console.log(`boardOne : ${welcomeBtnClicked}`);
        welcomeBtnClickedBoardCheck = welcomeBtnClicked;
        console.log(`welcome btn from sockets : ${welcomeBtnClicked}`);
        if (welcomeBtnClickedBoardCheck == false) {
            window.welcomeBtnClicked = false;
            document.getElementById('boardOneBody').style.visibility = 'hidden';
        } else {
            window.welcomeBtnClicked = true;
            document.getElementById('boardOneBody').style.visibility = 'visible';
        }
    });

    // socket.emit("songFinished");
    socket.on('songFinished', (songFinished) => {
        console.log(`boardOne song : ${songFinished}`);
        songFinishedBoardCheck = songFinished;
        if (songFinishedBoardCheck == false) {
            // dont do anything
        } else {
            // window.songFinished = true;
            console.log('boardOne if song');
            window.location.href = '/thankyou?boardOne=true';
            // window.songFinished = true;
            // window.location.href =
            //   "http://testing-chime.herokuapp.com/thankyou?boardOne=true";
        }
    });

    console.log(`welcome btn log2 : ${window.welcomeBtnClicked}`);
};

// each audio element to play beat
for (let i = 0; i < colors.length; i++) {
    if (i == 0) {
        console.log(colors);
        // var x = document.createElement("audio");
        // x.setAttribute("src", "https://mysound.cad.rit.edu/exhibit/animations/music/blueOne.wav");
        // x.setAttribute("id", "audio1");
        // document.getElementById("v1").appendChild(x);
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/1.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/1.wav');
        });
    }
    if (i == 1) {
        // var x = document.createElement("audio");
        // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/cork.mp3");
        // x.setAttribute("id", "audio2");
        // document.getElementById("v2").appendChild(x);
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/2.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/2.wav');
        });
    }
    if (i == 2) {
        // var x = document.createElement("audio");
        // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/coins.wav");
        // x.setAttribute("id", "audio3");
        // document.getElementById("v3").appendChild(x);
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/3.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/3.wav');
        });
    }
    if (i == 3) {
        // var x = document.createElement("audio");
        // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/keys.wav");
        // x.setAttribute("id", "audio4");
        // document.getElementById("v4").appendChild(x);
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/4.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/4.wav');
        });
    }
    if (i == 4) {
        // var x = document.createElement("audio");
        // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
        // x.setAttribute("id", "audio5");
        // document.getElementById("v5").appendChild(x);
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/5.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/5.wav');
        });
    }
    if (i == 5) {
        // var x = document.createElement("audio");
        // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
        // x.setAttribute("id", "audio5");
        // document.getElementById("v5").appendChild(x);
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/6.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/6.wav');
        });
    }
    if (i == 6) {
        // var x = document.createElement("audio");
        // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
        // x.setAttribute("id", "audio5");
        // document.getElementById("v5").appendChild(x);
        colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/7.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/7.wav);
                });
        }
        if (i == 7) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/8.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/8.wav');
            });
        }
        if (i == 8) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/9.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/9.wav');
            });
        }
        if (i == 9) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/10.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/10.wav');
            });
        }
        if (i == 10) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/11.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/11.wav');
            });
        }
        if (i == 11) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/12.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/12.wav');
            });
        }
        if (i == 12) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/13.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/13.wav');
            });
        }
        if (i == 13) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/14.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/14.wav');
            });
        }
        if (i == 14) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/15.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/15.wav');
            });
        }
        if (i == 15) {
            // var x = document.createElement("audio");
            // x.setAttribute("src", "https://mysound.cad.rit.edu/audioFiles/laugh.wav");
            // x.setAttribute("id", "audio5");
            // document.getElementById("v5").appendChild(x);
            colors[i].addEventListener('click', () => {
                const audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/16.wav',
                );
                audio.play();
                socket.emit('draw');
                socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardOneMusic/16.wav');
            });
        }
    }
