var btn_red;
var btn_green;
var btn_blue;
var btn_orange;
var btn_purple;
var btn_yellow;
var btn_paleblue;
var btn_seagreen;
var btn_pink;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("RED");
  btn_red.position(30,50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

  btn_blue = createButton("BLUE");
  btn_blue.position(320,50);
  btn_blue.mousePressed(blue_bg);

  btn_orange = createButton("ORANGE");
  btn_orange.position(90,50);
  btn_orange.mousePressed(orange_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(170,50);
  btn_yellow.mousePressed(yellow_bg);

  btn_purple = createButton("PURPLE");
  btn_purple.position(30,80);
  btn_purple.mousePressed(purple_bg);

  btn_paleblue = createButton("PALEBLUE");
  btn_paleblue.position(110,80);
  btn_paleblue.mousePressed(paleblue_bg);

  btn_seagreen = createButton("SEAGREEN");
  btn_seagreen.position(200,80);
  btn_seagreen.mousePressed(seagreen_bg);

  btn_pink = createButton("PINK");
  btn_pink.position(290,80);
  btn_pink.mousePressed(pink_bg);
}

function draw() {
  background(r,g,b);
}

function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
}

function green_bg()
{
  r = 0;
  g = 128;
  b = 0;
}

function blue_bg()
{
  r = 0;
  g = 0;
  b = 204;
}

function orange_bg()
{
  r = 255;
  g = 179;
  b = 25;
}

function yellow_bg()
{
  r = 255;
  g = 255;
  b = 25;
}

function purple_bg()
{
  r = 149;
  g = 0;
  b = 179;
}

function paleblue_bg()
{
  r = 201;
  g = 255;
  b = 229;
}

function seagreen_bg()
{
  r = 59;
  g = 122;
  b = 87;
}

function pink_bg()
{
  r = 241;
  g = 156;
  b = 187;
}