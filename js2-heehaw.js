/*
    Filename: js2-heehaw.js
	Robert Cox
	1/15/2020
	url: http://rcox.greenriverdev.com/IT328/js-exercises/js2-heehaw.html

    A console program that prints the numbers from 1 to 100 to the console.
    For any number evenly divisible by 3, print “Hee!” instead of the number.
    For any number evenly divisible by 5, print “Haw!” instead of the number.
    For any number evenly divisible by both 3 and 5, print “Hee Haw!” instead of the number.
 */
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Hee Haw!");
        } else if (i % 3 === 0) {
            console.log("Hee!");
        } else {
            console.log("Haw!");
        }
    } else {
        console.log(i);
    }
}