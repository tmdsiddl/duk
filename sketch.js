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
var len;
var len2;
var cuePoint = 0;
var timer1;
var timer2;
var timer3;
var timer4;
var timer5;
var musicRate = 1;
var vol=0.5;

function setup() {
  createCanvas(640, 480);
  soundFormats("mp3", "ogg");
  musicFile = loadSound("rose.mp3", loadMusic);
  musicFile2 = loadSound("panorama.mp3", loadMusic);

  button = createButton("play");
  button.mousePressed(togglePlaying1);

  button2 = createButton("Music1");
  button2.mousePressed(togglePlaying2);

  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

  rateButton1 = createButton("rate DOWN");
  rateButton1.mousePressed(rate1);
  rateButton2 = createButton("rate UP");
  rateButton2.mousePressed(rate2);

  
  volumeButton1 = createButton("volume DOWN");
  volumeButton1.mousePressed(volume1);
  volumeButton2 = createButton("volume UP");
  volumeButton2.mousePressed(volume2);

  music = 1;

  amp = new p5.Amplitude();
  // len = musicFile.duration();
  // len2 = musicFile2.duration();
}

function jumpSong() {
  cuePoint = cuePoint + 1;
  if (cuePoint > 4) {
    cuePoint = 0;
  }
  if (cuePoint === 0) {
    timer1 = 0;
    timer2 = 0;
  }
  if (cuePoint === 1) {
    timer1 = len / 5;
    timer2 = len / 5;
  }
  if (cuePoint === 2) {
    timer1 = (len * 2) / 5;
    timer2 = (len * 2) / 5;
  }
  if (cuePoint === 3) {
    timer1 = (len * 3) / 5;
    timer2 = (len * 3) / 5;
  }
  if (cuePoint === 4) {
    timer1 = (len * 4) / 5;
    timer2 = (len * 4) / 5;
  }

  console.log(timer1);
  // var len = musicFile.duration();
  musicFile.jump(timer1);
  musicFile2.jump(timer2);
  // musicFile2.jump(totalTime2);
  // console.log(t);
}

function togglePlaying1() {
  if (music === 1) {
    if (!musicFile.isPlaying()) {
      musicFile.setVolume(0.5);
      musicFile.rate(1);
      musicFile.play();
      button.html("stop");
    } else {
      musicFile.stop();
      button.html("play");
    }
  }
  if (music === 2) {
    if (!musicFile2.isPlaying()) {
      musicFile2.jump(200);
      musicFile2.setVolume(0.5);
      musicFile.rate(1);
      musicFile2.play();
      button.html("stop");
    } else {
      musicFile2.stop();
      button.html("play");
    }
  }
}

function togglePlaying2() {
  if (music === 1) {
    music = 2;
    cuePoint = 0;
    musicRate=1;
    vol=0.5;
    button2.html("panorama.mp3");
  } else {
    music = 1;
    cuePoint = 0;
    musicRate=1;
    vol=0.5;
    button2.html("rose.mp3");
  }
  // console.log(music);
}

function rate1(){
    musicRate=musicRate-0.2;
}

function rate2(){
    console.log("-");
    musicRate=musicRate+0.2;
}

function volume1(){
  vol= vol-0.1;
}

function volume2(){
    vol= vol+0.1;
}

function loadMusic() {
  console.log("It's Working");
  len = musicFile.duration();
  len2 = musicFile2.duration();
  console.log("len " + len, "len2 " + len2);
  // timer1 = 0;
  // timer2 = len/5;
  // timer3=len*2/5;
  // timer4=len*3/5;
  // timer5=len*4/5;
  // lent2/5=timer2;
}

function draw() {
  // console.log(amp.getLevel(), musicFile.duration());
  console.log(musicRate);
  background(255);
  if (music === 1) {
    fill(255, 192, 203);
    musicFile.rate(musicRate);
    musicFile.setVolume(vol);
    ellipse(musicFile.currentTime() * 3, 480 - amp.getLevel() * 1000, 20, 20);
  }
  if (music === 2) {
    fill(203, 192, 255);
    musicFile2.rate(musicRate);
    musicFile2.setVolume(vol);
    ellipse(musicFile2.currentTime() * 3, 480 - amp.getLevel() * 1000, 20, 20);
  }
}
