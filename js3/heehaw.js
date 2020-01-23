/*
    Filename: heehaw.js
	Robert Cox
	1/22/2020
	url: http://rcox.greenriverdev.com/IT328/js-exercises/js3/heehaw.html

    A function heeHaw() takes any number as an input and prints
    the numbers from 1 to that number to the web page.
    For any number evenly divisible by 3, prints “Hee!” instead of the number.
    For any number evenly divisible by 5, prints “Haw!” instead of the number.
    For any number evenly divisible by both 3 and 5, print “Hee Haw!” instead
    of the number. If the user passes in an invalid parameter, print
    an error message.
 */

let userInput = document.getElementById("user-num");

//enter is pressed after input, clicks the Go! button
userInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("go-btn").click();
    }
});

// when the Go! button is pressed
document.getElementById("go-btn").onclick = function () {
    //clear result div
    document.getElementById("result").innerHTML = "";
    // get user input
    let userNum = userInput.value;
    // test for numeric value less than 1000 (keeps it reasonable)
    if (isNaN(userNum) || userNum >= 1000 || userNum === "") {
        //create and display an error message
        let newEl = document.createElement("p");
        newEl.innerHTML = "Please only numbers and less than 1000";
        newEl.style.margin = "0";
        document.getElementById("result").appendChild(newEl);
    } else {
        // good input, run the purpose of this exercise
        heeHaw(userNum);
    }
};

//details in the comment header ^^^
function heeHaw(numInput) {
    for (let i = 1; i <= numInput; i++) {
        let newEl = document.createElement("p");
        newEl.style.margin = "0";
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0 && i % 5 === 0) {
                newEl.innerHTML = "Hee Haw!";

            } else if (i % 3 === 0) {
                newEl.innerHTML = "Hee!";
            } else {
                newEl.innerHTML = "Haw!";
            }
        } else {
            newEl.innerHTML = i.toString();
        }
        document.getElementById("result").appendChild(newEl);
    }
}


