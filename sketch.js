const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var o;
var p;
var q;
var r;
var s;
var t;
var u; 
var v; 
var w,x,y,z;
var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;
var LA1;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a19,a20,a21,a22,a23,a24,a25,a26
var flag

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	A = createSprite(380,0,700,20);
	B = createSprite(380,800,700,20);

	a1 = createSprite(290,113,330,20);
   a2 = createSprite(660,113,150,20);
   a3 = createSprite(575,303,20,400);
   a4 = createSprite(659,310,20,100);
   a5 = createSprite(690,350,80,20);
   a6 = createSprite(625,493,80,20);
   a7 = createSprite(230,233,20,230);
   a8 = createSprite(450,220,238,20);
   a9 = createSprite(285,353,130,20);
   a11 = createSprite(355,408,20,130);
   a10 = createSprite(510,353,110,20);
   a12 = createSprite(420,463,110,20);
   a13 = createSprite(80,230,100,20);
   a14 = createSprite(120,280,20,120);
   a15 = createSprite(80,463,100,20);
   a16 = createSprite(80,563,100,20);
   a17 = createSprite(230,563,20,210);
   a18 = createSprite(180,663,120,20);
   a19 = createSprite(440,593,440,20);
   a20 = createSprite(465,533,20,130);
   a21 = createSprite(575,650,20,120);
   a22 = createSprite(655,730,20,120);
   a23 = createSprite(445,700,250,20);
   a24 = createSprite(330,750,20,100);
   a25 = createSprite(200,770,20,65);
   a26 = createSprite(300,30,20,65);
   R = createSprite(20,400,20,800);
   S = createSprite(740,400,20,800);

   e = createSprite(550,220,40,40);
	c = createSprite(Math.round(random(20,350)),Math.round(random(20,780)),40,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(e.collide(c)){
	flag = createSprite(400,400,800,800);
 }

 
  e.collide(a1);
   e.collide(a2);
  
   e.collide(a3);
   e.collide(a4);
   e.collide(a5);
   e.collide(a6);
   e.collide(a7);
   e.collide(a8);
   e.collide(a9);
   e.collide(R);
   e.collide(S);
   e.collide(A);
   e.collide(B);
   e.collide(a10);
   e.collide(a11);
   e.collide(a12);
   e.collide(a13);
   e.collide(a14);
   e.collide(a15);
   e.collide(a16);
   e.collide(a17);
   e.collide(a18);
   e.collide(a19);
   e.collide(a20);
   e.collide(a21);
   e.collide(a22);
   e.collide(a23);
   e.collide(a24);
   e.collide(a26);
   c.collide(A);
   c.collide(B);
   c.collide(S);
   c.collide(R);
  
   c.collide(a1);
   c.collide(a2);
   c.collide(a3);
   c.collide(a4);
   c.collide(a5);
   c.collide(a6);
   c.collide(a7);
   
   c.collide(a8);
   c.collide(a9);
   c.collide(a11);
   c.collide(a12);
   c.collide(a13);
   c.collide(a14);
   c.collide(a15);
   c.collide(a16);
   c.collide(a17);
   c.collide(a18);
   c.collide(a19);
   c.collide(a20);
   c.collide(a21);
   c.collide(a22);
   c.collide(a23);
   c.collide(a24);
   c.collide(a25);
   c.collide(a26);


  drawSprites();
keyPressed();
}

function keyPressed(){
	if (keyCode === 37){
		e.x = e.x-6
	}
	if (keyCode === 39){
		e.x = e.x+6
	}
	if (keyCode === 40){
		e.y = e.y+6
	}
	if (keyCode === 38){
		e.y = e.y-6
	}
}
