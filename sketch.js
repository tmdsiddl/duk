var song;
var button;
var jumpButton;
function setup() {
    createCanvas(200, 200);
    song = loadSound('rose.mp3', loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    jumpButton = createButton('jump');
    jumpButton.mousePressed(jumpSong);
    background(51);
    }
    function togglePlaying() {
        if (!song.isPlaying()) {
            song.play();
            song.setVolume(0.3);
            button.html('pause');
        }else {
            song.stop();
            button.html('play');
        }
    }
        function changeBackground(col) {
            background(col);
            }
        
        function jumpSong() {
        var len = song.duration();
           var t = 0; //random(len);
        console.log(t);
        song.jump(t);
        }


    song.addCue(2, changeBackground, color(0, 0, 255));
    song.addCue(4, changeBackground, color(0, 255, 255));
    song.addCue(6, changeBackground, color(255, 255, 255));
    song.addCue(2, changeBackground, color(0, 255, 255));
    song.addCue(4, changeBackground, color(255, 0, 255));
    song.addCue(6, changeBackground, color(255, 255, 0));


    