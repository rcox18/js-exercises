/*
    Filename: heehaw.js
	Robert Cox
	1/22/2020
	url: http://rcox.greenriverdev.com/IT328/js-exercises/js3/heehaw.html

    A console program that prints the numbers from 1 to 100 to the web-page.
    For any number evenly divisible by 3, print “Hee!” instead of the number.
    For any number evenly divisible by 5, print “Haw!” instead of the number.
    For any number evenly divisible by both 3 and 5, print “Hee Haw!” instead
    of the number. A function heeHaw() takes any number as an input and prints
    the numbers from 1 to that number to the web page, using the same rules as
    the Chapter 2 exercise. If the user passes in an invalid parameter, print
    an error message.
 */

document.getElementById("go-btn").onclick = function () {
    document.getElementById("result").innerHTML = "";
    let userNum = document.getElementById("user-num").value;
    if (isNaN(userNum) || userNum >= 1000) {
        let newEl = document.createElement("p");
        newEl.innerHTML = "Please only numbers and less than 1000";
        newEl.style.margin = "0";
        document.getElementById("result").appendChild(newEl);
    } else {
        heeHaw(userNum);
    }
};

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


