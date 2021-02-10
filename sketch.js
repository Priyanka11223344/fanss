var starImg, fairyImg, bgImg;
var fairy;
var star, starBody;
var one,two,three,four;

const Engine = Matter.Engine;
//function konse use kr sakte he.
const World = Matter.World;
//engine ka world.gameb ka world.
const Bodies = Matter.Bodies;
//we can shapes..funcions
const Body = Matter.Body;
//har bodies ke functions.

function preload(){
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
    
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY = 2;

    one = createSprite(400,2,800,5);
	one.visible = false;
	two = createSprite(2,400,5,800);
	two.visible = false;
	three = createSprite(400,750,800,5);
	three.visible = false;
	four = createSprite(800,400,5,800);
	four.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
     
}


function draw() {
  background(bgImg);
  star.y = starBody.position.y;

    fairy.collide(one);
	fairy.collide(two);
	fairy.collide(three);
	fairy.collide(four);

	if(starBody.position.y > 470 && star.y > 470){
		matter.Body.setStatic(starBody,true)
	}
	
	keyPressed();
    drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		fairy.velocityY = -5;
	}
	if(keyCode === DOWN_ARROW){
		fairy.velocityY = 5;
	}
	if(keyCode ===RIGHT_ARROW){
		fairy.velocityX = 5;
	}
	if(keyCode === LEFT_ARROW){
		fairy.velocityX = -5;
}
}