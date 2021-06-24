//Create variables here
var dog,dogImg,happydogImg;
var database;
var foodS,foodStock;


function preload()
{
	//load images here
  dogImg = loadImage("dogImg.png");
  happydogImg = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 

background("green",46, 139, 87);

if(keyWentDown(UP_ARROW)){
  
  writeStock(foodS);
  dog.addImage(happyDogImg)
}
  drawSprites();
  //add styles here

  fill("yellow");
  textSize(20);
  text("Press UP_ARROW key to feed",100,50);
  text("Food: "+foodS,100,100)
}

function readStock(data){

  foodS = data.val();
}

function writeStock(x){

  x = x-1;

  database.ref('/').update({

    Food:x
  })
}



