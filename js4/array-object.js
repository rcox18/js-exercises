/*
    Filename: array-object.js
	Robert Cox
	1/29/2020
	url: http://rcox.greenriverdev.com/IT328/js-exercises/js4/array-object.html

    Defines a function that accepts an array as a parameter, and returns an
    object. The function converts the array into an object with object
    properties containing the array values grouped by type.
 */

//create two arrays, then use objectify() to convert arrays into objects
let input = [-1, 5, "cat", false, 10.2, true, "dog"];
let newObject = objectify(input);
let input2 = ["word", 23, 44, true, "sentence", -25, "paragraph", false, false,
    "string", 104, 17, true];
let newObject2 = objectify(input2);

//display tha array and corresponding object
printArray(input);
printObject(newObject);
printArray(input2);
printObject(newObject2);


/*converts the array into an object with object
properties containing the array values grouped by type.*/
function objectify(input) {
    let newObject = {"strings": [], "numbers": [], "booleans": []};

    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "string") {
            newObject["strings"].push(input[i]);
        } else if (typeof input[i] === "number") {
            newObject["numbers"].push(input[i]);
        } else if (typeof input[i] === "boolean") {
            newObject["booleans"].push(input[i]);
        }
    }

    return newObject;
}

//generates and displays the contents of an array
function printArray(array) {
    let output = document.createElement("p");
    output.innerHTML = "<b>The array:</b><br><span>[ ";
    for (let i = 0; i < array.length; i++) {
        output.innerHTML += ((i === 0) ? "" : ", ") + array[i];
    }

    output.innerHTML += " ]</span>";
    document.body.appendChild(output);
}

//generates and displays the contents of an object
function printObject(object) {
    let output = document.createElement("p");
    let keyList = Object.keys(object);
    output.innerHTML =  "<b>Contains the following types:</b><br>";
    for (let key of keyList) {
        output.innerHTML += "<b>" + key.charAt(0).toUpperCase()+key.slice(1) + ":</b><br>";
        for (let i = 0; i < object[key].length; i++) {
            output.innerHTML += "<span>" + object[key][i] + "</span><br>";
        }
        output.innerHTML += "<br>";
    }
    output.innerHTML += "<hr>";
    document.body.appendChild(output);
}

