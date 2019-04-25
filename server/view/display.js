"use strict";

(function () {
    const socket = io();
    const songArray = ['1', '2', '3', '4'];
    const strokeArray = ['1', '2', '3', '4', '5', '6'];
    let display = strokeArray.sort(rand);
    let playlist = songArray.sort(rand);
    let cSong = 0;
    let cStroke = 0;
    let audio = new Audio("https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackOne.mp3");
    socket.on("songBackground", startSong);
    socket.on('draw', drawStoke);
    // socket.on("sound", playSound(song));

    function drawStoke() {
        var c = display[cStroke]
        let videoPlayer

        switch (c) {
            case '1':
                videoPlayer = document.getElementById(
                    'display1');
                videoPlayer.load();

                var playPromis = videoPlayer.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '2':
                videoPlayer = document.getElementById(
                    'display2');
                console.dir(videoPlayer);
                videoPlayer.load();
                var playPromis = videoPlayer.play();

                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '3':
                videoPlayer = document.getElementById(
                    'display3');
                videoPlayer.load();
                var playPromis = videoPlayer.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '4':
                videoPlayer = document.getElementById(
                    'display4');
                videoPlayer.load();
                var playPromis = videoPlayer.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '5':
                videoPlayer = document.getElementById(
                    'display5');
                videoPlayer.load();
                var playPromis = videoPlayer.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '6':
                videoPlayer = document.getElementById(
                    'display6');
                videoPlayer.load();
                var playPromis = videoPlayer.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            default:
                videoPlayer = document.getElementById(
                    'display1');
                videoPlayer.load();

                var playPromis = videoPlayer.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;

        };
        cStroke++;
        if (cStroke >= display.length) {
            cStroke = 0
            display = strokeArray.sort(rand);
        }
    };


    function startSong() {
        console.log(playlist);
        var c = playlist[cSong];
        console.log(playlist[cSong]);
        switch (c) {
            case '1':
                audio = new Audio(
                    "https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackOne.mp3"
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '2':
                audio = new Audio(
                    "https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackTwo.mp3"
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '3':
                audio = new Audio(
                    "https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackThree.mp3"
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            case '4':
                audio = new Audio(
                    "https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackFour.mp3"
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }
                break;
            default:
                audio = new Audio(
                    "https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackThree.mp3"
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then(_ => {

                        })
                        .catch(error => {

                        });
                }

                break;
        };
        //audio.play();
        cSong++;
        if (cSong >= playlist.length) {
            cSong = 0;
            playlist = songArray.sort(rand);
        }
        audio.addEventListener("ended", songEnded);
    };

    function rand(a, b) {
        return 0.5 - Math.random();
    };

    const songEnded = () => {
        socket.emit("songFinished");
    };


})();
