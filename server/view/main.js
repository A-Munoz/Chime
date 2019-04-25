"use strict";

(function () {
    const socket = io();
    const colors = document.getElementsByTagName("video");

    const current = {
        color: "black"
    };
    let drawing = false;


    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", onColorUpdate, false);
    }

    function onColorUpdate(e) {
        current.color = e.target.className.split(" ")[1];
    }

})();
