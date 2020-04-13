const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1;
var stone1;


function setup() {
createCanvas(500,500);
engine = Engine.create();
 world = engine.world;
stick1=new Stick(50,450,30,90)
stick2=new Stick(100,450,30,90)
stick3=new Stick(150,450,30,90)
stick4=new Stick(200,450,30,90)
stick5=new Stick(250,450,30,90)
stick6=new Stick(300,450,30,90)
stick7=new Stick(350,450,30,90)
stick8=new Stick(400,450,30,90)
stick9=new Stick(450,450,30,90)
stick10=new Stick(100,380,30,88)
stick11=new Stick(150,380,30,88)
stick12=new Stick(200,380,30,88)
stick13=new Stick(250,380,30,88)
stick14=new Stick(300,380,30,88)
stick15=new Stick(350,380,30,88)
stick16=new Stick(400,380,30,88)
stick17=new Stick(150,287,30,60)
stick18=new Stick(150,287,30,60)
stick19=new Stick(200,287,30,60)
stick20=new Stick(250,287,30,60)
stick21=new Stick(300,287,30,60)
stick22=new Stick(350,287,30,60)
stick23=new Stick(200,213,30,40)
stick24=new Stick(250,213,30,40)
stick25=new Stick(300,213,30,40)
stick26=new Stick(250,162,30,30)
stone1=new Stone(250,410,470,25)
stone2=new Stone(250,330,400,25)
stone3=new Stone(250,243,330,25)
stone4=new Stone(250,185,220,25)
}

function draw() {
 background(200);  
 Engine.update(engine);
 stick1.display();
 stick2.display();
stick3.display();
 stick4.display();
 stick5.display();
 stick6.display();
stick7.display();
 stick8.display();
 stick9.display();
 stick10.display();
stick11.display();
stick12.display();
stick13.display();
stick14.display();
stick15.display();
stick16.display();
 stone1.display();
 stone2.display();
 stick17.display();
 stick18.display();
 stick19.display();
 stick20.display();
 stick21.display();
 stick22.display();
 stick23.display();
 stick24.display();
 stick25.display();
 stick26.display();
stone3.display();
stone4.display();
  drawSprites();
}