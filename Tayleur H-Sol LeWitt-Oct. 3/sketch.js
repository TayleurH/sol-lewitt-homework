
var x;

function setup(){

stroke(0);
 createCanvas(600,500);
 stroke(0);

x = 0;

y = 200;

b = 60;

c = 200;

g = 100;

}


 function draw(){
 	




//background(255);
//while(x<width){

for(var i = 0; i < 5; i++){


	var blueVal = i * (255/5);

	fill(0,0,blueVal);




//colorMode(RGB,210)
//fill(200,30,100);

rect(x,0,(i*20)+10,200);

x+=10
}



/*
while(y<height){

fill(200);	
//ellipse(300,y,20,20);

arc(250, y, (b+1), 100, 8, HALF_PI);


y+=10;

b+=8;
}

*/

while(y<height){




fill(6,157,25);	
ellipse(440,y,(b+9),60);

y+=5;

b+=5;



}

while(c<height){

fill(255,0,0);	
ellipse(100,c,(g+9),60);

c+=7;

g+=7;

}

fill(0);
rect(300,200,15,300);


fill(0);
rect(0,200,600,15);


fill(0);
rect(0,0,15,500);

fill(0);
rect(587,0,15,500);

fill(0);
rect(0,0,600,15);

fill(0);
rect(0,487,600,15);

//fill(0);
//ellipse(60,400,100,100);


}
