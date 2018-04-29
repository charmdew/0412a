
var bricks = [10];

function setup() {
  createCanvas(501, 201);
  var i;
  for(i=0; i<10; i++){
     bricks[i]=1;
  }
}

function draw() {
  background(0);
  
  for(i=0; i<10; i++){
    if( bricks[i]==1) fill(255);
    else if( bricks[i]==0) fill(0);
    rect(i*50, 0, 50, 200);
  }  
}

function mouseReleased(){
  var num= int(mouseX/50);
  if(bricks[num]==1) {
    bricks[num]=0;
  }
  else if(bricks[num]==0) {
    bricks[num]=1;
  }
}
