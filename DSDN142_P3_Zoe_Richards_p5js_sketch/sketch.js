var time = 0;
var yPos = 0;
var xPos = 0;
var bG = 0;
var bGTime = 0;
var radius = 30;
var fillShape = 0;

function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);

	//saveFrames("Zoe_Richards_DSDN142_P3_1_", "png", 20, 22);
}

function draw() {
	background(255);
	noStroke();


	//anti-clockwise circle
	for(var i = 0; i < 20; i++){
		xPos = map(sin(time+20*i), -1, 1, 100, 400);
		yPos = map(cos(time+20*i), -1, 1, 100, 400);
		radius = map(sin(time), -1, 1, 0, 40);

		drawCircles();
	}

	//clockwise circle
	for(var i = 0; i < 20; i++){
		xPos = map(sin(time+20*i), 1, -1, 50, 350);
		yPos = map(cos(time+20*i), -1, 1, 50, 350);
		radius = map(sin(time), 1, -1, 0, 40);
		
		drawCircles();

	}

	//clockwise circle
	for(var i = 0; i < 20; i++){

		xPos = map(sin(time+20*i), 1, -1, 150, 450);
		yPos = map(cos(time+20*i), -1, 1, 150, 450);
		radius = map(sin(time), 1, -1, 0, 40);
		
		drawCircles();

	}
	

	time = time + 0.8;
	
	bGTime = bGTime + 3;

	bG = map(sin(bGTime), -1, 1, 200, 250);


}

function drawCircles() {

	fill(xPos, yPos, fillShape);
	fillShape = map(sin(bGTime), -1, 1, 150, 200);
	ellipse(xPos, yPos, radius, radius);


}