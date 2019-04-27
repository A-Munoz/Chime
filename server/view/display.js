(function () {
    const socket = io();
    const songArray = ['1', '2', '4'];
    const strokeArray = ['1', '2', '3', '4', '5', '6'];
    const hueArray = ['1', '2', '3', '4'];
    let hueShift = hueArray.sort(rand);
    let display = strokeArray.sort(rand);
    let playlist = songArray.sort(rand);
    let cSong = 0;
    let cStroke = 0;
    let cHue = 0;
    let limit = 0;
    let audio = new Audio('https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackOne.mp3');
    socket.on('songBackground', startSong);
    socket.on('draw', drawStoke);
    socket.on("sound", (sound) => {
        var song = new Audio(sound)
        var playPromis = song.play();
        if (playPromis !== undefined) {
            playPromis.then((_) => {

                })
                .catch((error) => {

                });
        }
    });

    function drawStoke() {
        if (limit <= 4) {
            const c = display[cStroke];
            let videoPlayer;

            switch (c) {
                case '1':
                    videoPlayer = document.getElementById(
                        'display1',
                    );
                    hueCall(videoPlayer);

                    var playPromis = videoPlayer.play();
                    if (playPromis !== undefined) {
                        playPromis.then((_) => {

                            })
                            .catch((error) => {

                            });
                    }
                    break;
                case '2':
                    videoPlayer = document.getElementById(
                        'display2',
                    );
                    hueCall(videoPlayer);

                    var playPromis = videoPlayer.play();

                    if (playPromis !== undefined) {
                        playPromis.then((_) => {

                            })
                            .catch((error) => {

                            });
                    }
                    break;
                case '3':
                    videoPlayer = document.getElementById(
                        'display3',
                    );
                    hueCall(videoPlayer);

                    var playPromis = videoPlayer.play();
                    if (playPromis !== undefined) {
                        playPromis.then((_) => {

                            })
                            .catch((error) => {

                            });
                    }
                    break;
                case '4':
                    videoPlayer = document.getElementById(
                        'display4',
                    );
                    hueCall(videoPlayer);

                    var playPromis = videoPlayer.play();
                    if (playPromis !== undefined) {
                        playPromis.then((_) => {

                            })
                            .catch((error) => {

                            });
                    }
                    break;
                case '5':
                    videoPlayer = document.getElementById(
                        'display5',
                    );
                    hueCall(videoPlayer);

                    var playPromis = videoPlayer.play();
                    if (playPromis !== undefined) {
                        playPromis.then((_) => {

                            })
                            .catch((error) => {

                            });
                    }
                    break;
                case '6':
                    videoPlayer = document.getElementById(
                        'display6',
                    );
                    hueCall(videoPlayer);

                    var playPromis = videoPlayer.play();
                    if (playPromis !== undefined) {
                        playPromis.then((_) => {

                            })
                            .catch((error) => {

                            });
                    }
                    break;
                default:
                    videoPlayer = document.getElementById(
                        'display1',
                    );
                    hueCall(videoPlayer);


                    var playPromis = videoPlayer.play();
                    if (playPromis !== undefined) {
                        playPromis.then((_) => {

                            })
                            .catch((error) => {

                            });
                    }
                    break;
            }
            limit++;
            console.log(limit)
            console.log("limit");
            //videoPlayer.addEventListener('ended', displayLimit);
            videoPlayer.addEventListener('ended', function () {
                videoPlayer.load();
            });
            cStroke++;
            if (cStroke >= display.length) {
                cStroke = 0;
                display = strokeArray.sort(rand);
            }
        }
    }


    function startSong() {
        console.log(playlist);
        const c = playlist[cSong];
        console.log(playlist[cSong]);
        switch (c) {
            case '1':
                audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackOne.mp3',
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then((_) => {

                        })
                        .catch((error) => {

                        });
                }
                break;
            case '2':
                audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackTwo.mp3',
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then((_) => {

                        })
                        .catch((error) => {

                        });
                }
                break;
            case '3':
                audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackThree.mp3',
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then((_) => {

                        })
                        .catch((error) => {

                        });
                }
                break;
            case '4':
                audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackFour.mp3',
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then((_) => {

                        })
                        .catch((error) => {

                        });
                }
                break;
            default:
                audio = new Audio(
                    'https://mysound.cad.rit.edu/exhibit/animations/music/backgroundMusic/BackTrackThree.mp3',
                );
                var playPromis = audio.play();
                if (playPromis !== undefined) {
                    playPromis.then((_) => {

                        })
                        .catch((error) => {

                        });
                }

                break;
        }
        // audio.play();
        cSong++;
        if (cSong >= playlist.length) {
            cSong = 0;
            playlist = songArray.sort(rand);
        }
        audio.addEventListener('ended', songEnded);
    };

    function rand(a, b) {
        return 0.5 - Math.random();
    };

    function hueCall(elem) {
        /*35, 90,275 */
        const c = hueShift[cHue];
        switch (c) {
            case '1':
                elem.style.filter = "hue-rotate(35deg)";
                elem.style.zIndex = 5;
                break;
            case '2':
                elem.style.filter = "hue-rotate(90deg)";
                elem.style.zIndex = 3;
                break;
            case '3':
                elem.style.filter = "hue-rotate(275deg)";
                elem.style.zIndex = 10;
                break;
            case '4':
                elem.style.filter = "hue-rotate(0deg)";
                elem.style.zIndex = 8;
                break;
            default:
                elem.style.filter = "hue-rotate(0deg)";
                elem.style.zIndex = 8;
                break;
        }
        cHue++;
        if (cHue >= hueShift.length) {
            cHue = 0;
            hueShift = hueArray.sort(rand);
        }

    };

    function displayLimit() {
        limit = limit - 1;
        console.log(limit);
    };

    function playSound(pSong) {
        var sound = pSong
        var playPromis = sound.play();
        if (playPromis !== undefined) {
            playPromis.then((_) => {

                })
                .catch((error) => {

                });
        }
    }

    const songEnded = () => {
        socket.emit('songFinished');
        limit = 0;
    };
}());
