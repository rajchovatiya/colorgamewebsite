var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var colors = generateRandomColor(numSquares);
var pikedColor = pikeColor();


// Easy And the Hard Button

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pikedColor = pikeColor();
    colorDisplay.textContent = pikedColor;
    for(var i = 0 ; i< squares.length ;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pikedColor = pikeColor();
    colorDisplay.textContent = pikedColor;
    for(var i = 0 ; i< squares.length ;i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});   

// reset butoon

resetButton.addEventListener("click", function(){

      // generate the random color
      colors = generateRandomColor(numSquares);
      // piked color from the array
      pikedColor = pikeColor();

      //change the display color
      colorDisplay.textContent = pikedColor;  
      messageDisplay.textContent = "";
      resetButton.textContent = "New Colors";

      for (let i = 0; i < squares.length; i++) {
      //assign new color to the all the square

          squares[i].style.backgroundColor = colors[i];
          
      }
      h1.style.backgroundColor = "steelblue"; 
});

// change the context of the text.

colorDisplay.textContent = pikedColor;


// square color loop

for (var i = 0; i < squares.length; i++) {

    // add the static color and assign to the squares

    squares[i].style.backgroundColor = colors[i];

    // eventListener part

    squares[i].addEventListener("click", function () {

        //  grabe the color from the clicked color

        var clickedColor = this.style.backgroundColor;

        // console.log(clickedColor,pikedColor);
        
        // checked color and the pikedColor

        if (clickedColor === pikedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?"; 

            // calling the function

            changeColor(clickedColor);

            // h1 color also changed

            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}


function changeColor(color) {
    // select all the square
    for (var i = 0; i < squares.length; i++) {
        //  assign all the square to the same color
        squares[i].style.backgroundColor = color;
    }
}


function pikeColor() {
    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColor(num) {
    // make an array

    var arr = [];

    // number of times loop repeat

    for (var i = 0; i < num; i++) {
        // push the color in array
        arr.push(randomColor());
    }

    // return the array

    return arr;
}


function randomColor() {
    // pike color red from 0-256

    var r = Math.floor(Math.random() * 256);

    // pike color red from 0-256

    var g = Math.floor(Math.random() * 256);

    // pike color red from 0-256

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}