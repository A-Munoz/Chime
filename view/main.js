'use strict';

(function() {

  var socket = io();
  var canvas = document.getElementsByClassName('whiteboard')[0];
  var colors = document.getElementsByClassName('color');
  var context = canvas.getContext('2d');

  var current = {
    color: 'black'
  };
  var drawing = false;

  for (var i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', onColorUpdate, false);
  }

  socket.on('drawing', onDrawingEvent);

  window.addEventListener('resize', onResize, false);
  onResize();
  canvas.addEventListener('mousedown', onMouseDown, false);


  function onColorUpdate(e){
    current.color = e.target.className.split(' ')[1];
  }
    
 function onMouseDown(e){
    drawing = true;
    draw(current.color, true);
  }
 function draw(color, emit){
      var ctx = canvas.getContext("2d");
    ctx.fillStyle = current.color;
    ctx.fillRect(20,20,150,100);
     socket.emit('drawing', {
         color: color
     });
 }

  // limit the number of events per second
  function throttle(callback, delay) {
    var previousCall = new Date().getTime();
    return function() {
      var time = new Date().getTime();

      if ((time - previousCall) >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }

  function onDrawingEvent(data){
    var w = canvas.width;
    var h = canvas.height;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = data.color;
    ctx.fillRect(20,20,150,100);
  }

  // make the canvas fill its parent
  function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

})();