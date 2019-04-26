const colors = document.getElementsByTagName('video');

const socket = io();
let songFinishedBoardCheck;

window.onload = function () {
    // prevent right click
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.getElementById('my_audio').play();

    socket.on('songFinished', (songFinished) => {
        console.log(`boardOne song : ${songFinished}`);
        songFinishedBoardCheck = songFinished;
        if (songFinishedBoardCheck == false) {
            // dont do anything
        } else {
            // window.songFinished = true;
            console.log('boardOne if song');
            window.location.href = '/thankyou?boardTwo=true';
            // window.songFinished = true;
            // window.location.href =
            //   "http://testing-chime.herokuapp.com/thankyou?boardOne=true";
        }
    });
};

const songEnded = () => {
    const songEnded = true;
    socket.emit('songFinished', songEnded);
    socket.on('songFinished', (songFinished) => {
        console.log(`boardtwo song : ${songFinished}`);
        songFinishedBoardCheck = songFinished;
        if (songFinishedBoardCheck == true) {
            window.location.href = '/thankyou?boardTwo=true';
        }
    });

    window.location.href = '/thankyou?boardTwo=true';

    // window.location.href =
    //   "http://testing-chime.herokuapp.com/thankyou?boardTwo=true";
};

for (let i = 0; i < colors.length; i++) {
    if (i == 0) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/1.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/1.wav');
        });
    }
    if (i == 1) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/2.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/2.wav');
        });
    }
    if (i == 2) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/3.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/3.wav');
        });
    }
    if (i == 3) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/4.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/4.wav');
        });
    }
    if (i == 4) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/5.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/5.wav');
        });
    }
    if (i == 5) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/6.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/6.wav');
        });
    }
    if (i == 6) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/7.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/7.wav');
        });
    }
    if (i == 7) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/8.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/8.wav');
        });
    }
    if (i == 8) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/9.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/9.wav');
        });
    }
    if (i == 9) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/10.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/10.wav');
        });
    }
    if (i == 10) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/11.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/11.wav');
        });
    }
    if (i == 11) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/12.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/12.wav');
        });
    }
    if (i == 12) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/13.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/13.wav');
        });
    }
    if (i == 13) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/14.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/14.wav');
        });
    }
    if (i == 14) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/15.wav',
            );
            audio.play();
            socket.emit('draw');
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/15.wav');
        });
    }
    if (i == 15) {
        colors[i].addEventListener('click', () => {
            const audio = new Audio(
                'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/16.wav',
            );
            socket.emit('draw');
            var sound = audio;
            socket.emit('sound', 'https://mysound.cad.rit.edu/exhibit/animations/music/boardTwoMusic/16.wav');
        });
    }
}
