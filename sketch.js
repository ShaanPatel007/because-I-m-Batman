var Batman , IamBAtman , thunder , lightning;
var frame;

function preload(){
IamBatman = loadImage("images/batman mimic project pic.png");  
thunder = loadImage("images/lightning.png");
}

function setup(){
createCanvas(400,400)
Batman = new Umbrella(200,200,30,30);
Batman.addImage("because I'm Batman",IamBatman);   

framescore = 0;

frame = GetFrameCount() % 600;

lightning = createSprite(random(0,400),30,50,50);
lightning.addImage("lightning before the thunder",thunder);
}

function draw(){
background(255,255,255);

if(GetFrameCount() % 10 != 0){
    rain = new Drops(random(10,390),0,5);
    rain.shapeColor = "blue";
    rain.velocityY = 20;
    rain.lifetime = 25 
}

drawsprites();
}

