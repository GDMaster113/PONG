//VARIABLES
var ballPos, gravX, gravY, gameOver, btnRestart, pscore, p1score;

function setup() {
	createCanvas(600, 400);

	//DEFINING VARIABLES
	ballPos = createVector(random(width), random(height));
	player = createVector(5, random(400));
	player1 = createVector(width - 15, random(400));
	gravX = 1;
	gravY = 1;
	gameOver = false;
	pscore = 0;
	p1score = 0;
}

function draw() {
	background(0);
	
	//SCORE
	if (ballPos.x < 0) {
		p1score += 1;
	}
	if (ballPos.x > width) {
		pscore += 1;
	}
	
	//GAME OVER CODE
	if (ballPos.x < 0 || ballPos.x > width) {
		ballPos = createVector(random(width), random(height));
		player = createVector(5, random(400));
		player1 = createVector(width - 15, random(400));
		gravX = -1;
		gravY = 1;
	}

	
	text(pscore, width / 2 - 100, 50);
	text(p1score, width / 2 + 100, 50);


	//DRAW
	rect(width / 2, 0, 10, 400);
	rect(player1.x, player1.y, 8, 50);
	rect(player.x, player.y, 8, 50);
	rect(ballPos.x, ballPos.y, 30, 30);
	fill(255);
	textSize(50);


	//BALL PHYSICS
	if (ballPos.y < 0) {
		gravY = 1;
	} else if (ballPos.y > height - 30) {
		gravY = -1;
	}
	if (gravX == 1) {
		ballPos.x += 3;
	} else if (gravX == -1) {
		ballPos.x -= 3;
	}
	if (gravY == 1) {
		ballPos.y += 3;
	} else if (gravY == -1) {
		ballPos.y -= 3;
	}

	//CONTROLS
	if (keyIsDown(DOWN_ARROW)) {
		player1.y += 5;
	} else if (keyIsDown(UP_ARROW)) {
		player1.y -= 5;
	}

	if (player.y <= 0) {
		player.y += 7;
	} else if (player.y >= height - 50) {
		player.y -= 7;
	}

	if (keyIsDown(83)) {
		player.y += 5;
	} else if (keyIsDown(87)) {
		player.y -= 5;
	}

	if (player1.y <= 0) {
		player1.y += 7;
	} else if (player1.y >= height - 50) {
		player1.y -= 7;
	}

	//COLLISIONS
	if (ballPos.x - 10 <= player.x && ballPos.y + 30 >= player.y && ballPos.y <= player.y + 50) {
		gravX *= -1;
	}
	if (ballPos.x + 30 >= player1.x && ballPos.y + 30 >= player1.y && ballPos.y <= player1.y + 50) {
		gravX *= -1;
	}

}
