const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

//cors
app.use(cors());

// routing
app.use("/", express.static(`${__dirname}/view`));
app.use("/welcome", express.static(`${__dirname}/view/welcome.html`));
app.use("/thankyou", express.static(`${__dirname}/view/confirmationPage.html`));
app.use("/boardOne", express.static(`${__dirname}/view/soundboardOne.html`));
app.use("/boardTwo", express.static(`${__dirname}/view/soundboardTwo.html`));
app.use(
    "/boardThree",
    express.static(`${__dirname}/view/soundboardThree.html`)
);

function onConnection(socket) {
    // Updates Display
    socket.on('draw', function () {
        socket.broadcast.emit('draw');
    });
    socket.on("welcomeBtnClicked", function (welcomeBtnClicked) {
        if (welcomeBtnClicked === false) {
            socket.broadcast.emit("welcomeBtnClicked", welcomeBtnClicked);
        } else {
            socket.broadcast.emit("welcomeBtnClicked", welcomeBtnClicked);
            socket.broadcast.emit("songBackground");
        }
    });
    socket.on("songFinished", function (songFinished) {
        console.log("songFinished " + songFinished);
        socket.broadcast.emit("songFinished", songFinished);
    });
}

io.on("connection", onConnection);

http.listen(port, () => console.log(`listening on port ${port}`));
