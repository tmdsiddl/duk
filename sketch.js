let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4;
var jumpButton;
//var t;
let amp;
let music;

function setup()
{
    createCanvas(640, 480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('rose.mp3', loadMusic);
    musicFile2 = loadSound('panorama.mp3', loadMusic);

    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);

    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);

    music = 1;

    amp = new p5.Amplitude();
}

function jumpSong(){
    var len = song.duration();
    song.jump(len/5);
    console.log(t);
}

function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            button.html('stop');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            musicFile2.jump(200);
            musicFile2.setVolume(0.5);
            musicFile.rate(1);
            musicFile2.play();
            button.html('stop');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
 }

 function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('panorama.mp3');
    }else{
        music = 1;
        button2.html('rose.mp3');
    }
    console.log(music);
 }

function loadMusic()
{
    console.log("It's Working");
}

function draw(){
    console.log(amp.getLevel(), musicFile.duration());


fill(255, 0, 0);
ellipse(musicFile.currentTime()*20,480-amp.getLevel()*1000, 20, 20);

}