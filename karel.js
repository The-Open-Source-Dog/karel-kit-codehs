// Make karel the dog turn right
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}
// oops, i mised the target
function turnAround(){
    turnLeft();
    turnLeft();
}
// make pankakes
function pankake(){
    putBall();
    putBall();
    putBall();
}
// eat pankakes
function eatPankake(){
    takeBall();
    takeBall();
    takeBall();
}
// make a stack of 2 balls
function stack(){
    putBall();
    putBall();
}
// eat a stack 
function eatStack(){
    takeBall();
    takeBall();
    takeBall();
}
// beep beep, backing up
function reverse(){
    turnAround();
    move();
    turnAround();
}
function moveTwice(){
    move();
    move();
}
function reverseTwice(){
    reverse();
    reverse();
}
