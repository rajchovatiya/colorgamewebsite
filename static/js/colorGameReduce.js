var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var colors = generateRandomColor(numSquares);
var pikedColor = pikeColor();

init();

function init() {
    // call the mode button

    setUpModeButton();

    // call the square button 

    setUpSquare();

    reset();
}

function setUpModeButton() {
    // mode button => replace the code of the hard and the easy button

    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");


            // figer out howmany square
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquare() {
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

}

function reset() {
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
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}

// reset butoon

resetButton.addEventListener("click", function () {
    reset();
});


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