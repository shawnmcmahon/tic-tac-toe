//querySelectors
var squareA1 = document.querySelector('#a1');
var squareA2 = document.querySelector('#a2');
var squareA3 = document.querySelector('#a3');
var squareB1 = document.querySelector('#b1');
var squareB2 = document.querySelector('#b2');
var squareB3 = document.querySelector('#b3');
var squareC1 = document.querySelector('#c1');
var squareC2 = document.querySelector('#c2');
var squareC3 = document.querySelector('#c3');

//arrays
var startofGameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];


//eventListeners
squareA1.addEventListener('click', playerTakeSquare);
squareA2.addEventListener('click', playerTakeSquare);
squareA3.addEventListener('click', playerTakeSquare);
squareB1.addEventListener('click', playerTakeSquare);
squareB2.addEventListener('click', playerTakeSquare);
squareB3.addEventListener('click', playerTakeSquare);
squareC1.addEventListener('click', playerTakeSquare);
squareC2.addEventListener('click', playerTakeSquare);
squareC3.addEventListener('click', playerTakeSquare);


//functions
function playerTakeSquare(squareLocation) {

}
