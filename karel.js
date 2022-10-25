// MIT License
// 
// Copyright (c) 2022 TheOpenSourceDog/Xavier
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// Source Code is avaibele at https://github.com/The-Open-Source-Dog/karel-kit-codehs/
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
// fulfill lesson requirement, interchangeable with pancakes
function makePancakes(){
    pankake();
}
