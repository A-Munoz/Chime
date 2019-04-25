"use strict";

(function () {
    const socket = io();
    const songArray = ['1', '2', '3', '4'];
    const strokeArray = ['1', '2', '3'];
    let display = strokeArray.sort(rand);
    let playlist = songArray.sort(rand);
    let cSong = 0;
    let cStroke = 0;
    let audio = new Audio("https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackOne.mp3");
    let songFinishedBoardCheck;
    socket.on('draw', drawStoke);
    socket.on("welcomeBtnClicked", startSong);
    /*socket.on("drawing", function(data){
        drawStoke;
        console.log('test');
    });*/

    function drawStoke() {
        var c = display[cStroke]
        let videoPlayer
        /*videoPlayer = document.getElementById(
                    'display6');
                videoPlayer.load();
                videoPlayer.play()*/
        switch (c) {
            case '1':
                videoPlayer = document.getElementById(
                    'display1');
                //videoPlayer.load();
                console.dir(videoPlayer);
                videoPlayer.currentTime = 0;
                videoPlayer.play();

              // videoPlayer.addEventListener("loadeddata", () => {
              //     var playPromis = videoPlayer.play();
              //     if (playPromis !== undefined) {
              //         playPromis.then(_ => {
              //                 console.log("success");
              //             })
              //             .catch(error => {
              //                 console.log(error);
              //             });
              //     }
              // })
                break;
            case '2':
                videoPlayer = document.getElementById(
                    'display2');
                console.dir(videoPlayer);
                //videoPlayer.load();
                //var playPromis = 
                videoPlayer.currentTime = 0;
                videoPlayer.play();
                //if (playPromis !== undefined) {
                //    playPromis.then(_ => {
                //            console.log("success");
                //            videoPlayer.load();
                //        })
                //        .catch(error => {
                //            console.log(error);
                //        });
                //}
                break;
            case '3':
                videoPlayer = document.getElementById(
                    'display3');
                //videoPlayer.load();
                //var playPromis = 
                console.dir(videoPlayer);
                videoPlayer.currentTime = 0;
                videoPlayer.play();
                //if (playPromis !== undefined) {
                //    playPromis.then(_ => {
                //            console.log("success");
                //        })
                //        .catch(error => {
                //            console.log(error);
                //        });
                //}
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
        //var c = playlist[cSong];
        var c = 0;
        console.log(playlist[cSong]);
        var audio;
        /* var audio = new Audio("https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackOne.mp3");
                 audio.play();*/

        switch (c) {
            case '1':
                audio = document.getElementById('audio1');
                audio.play();
                //audio.play();
                break;
            case '2':
                audio = new Audio("https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackTwo.mp3");
                audio.play();
                break;
            case '3':
                audio = new Audio("https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackThree.mp3");
                audio.play();
                break;
            case '4':
                audio = new Audio("https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackFour.mp3");
                audio.play();
                break;
            default:
                audio = new Audio("https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackOne.mp3");
                //audio.play();
                break;
        };
        //audio.play();
        cSong++;
        if (cSong >= playlist.length) {
            cSong = 0;
            playlist = songArray.sort(rand);
        }
    };

    function rand(a, b) {
        return 0.5 - Math.random();
    };


})();
