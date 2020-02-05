/*
    Filename: json-search.js
	Robert Cox
	2/5/2020
	url: http://rcox.greenriverdev.com/IT328/js-exercises/js5/json-search.html

    Processes user input then searches for the input in a list
    and displays matching results.
 */

let peoplesListObj = JSON.parse(peopleList);
let outPut = document.getElementById("result");
let searchInput = document.getElementById("name-searched");
let result = document.createElement("p");

document.getElementById("submit").onclick = process;

//enter is pressed after input, clicks the submit button
searchInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

//Generates a text representation of a "person" object from peoplesList
function generateResult(i) {
    let temp = document.createElement("p");
    temp.innerText =
        "Name: " + peoplesListObj[i].firstName +
        " " + peoplesListObj[i].lastName + "\n" +
        "Sex: " + peoplesListObj[i].sex + "\n" +
        "Born: " + peoplesListObj[i].born + "\n" +
        "Died: " + peoplesListObj[i].died + "\n" +
        "Father: " + peoplesListObj[i].father.firstName +
        " " + peoplesListObj[i].father.lastName + "\n" +
        "Mother: " + peoplesListObj[i].mother.firstName +
        " " + peoplesListObj[i].mother.lastName + "\n";
    return temp;
}

//processes the input name on submit
function process() {
    //clear any existing output
    outPut.innerHTML = "";
    //check for not empty input
    if (searchInput.value.trim() !== "") {
        //clear old result and gather the input name(s)
        result.innerHTML = "";
        let fullName = searchInput.value.split(" ");
        let first = fullName[0].trim().toLowerCase();
        let last;
        if (fullName.length > 1) {
            last = fullName[1].trim().toLowerCase();
        }

        //run through the people list
        for (let i = 0; i < peoplesListObj.length; i++) {
            //if we have an exact (not case sensitive) match...
            if (peoplesListObj[i].firstName.toLowerCase() === first &&
                peoplesListObj[i].lastName.toLowerCase() === last) {
                //...append this person to the results
                result.appendChild(generateResult(i));

            //if only one name is added AND it matches a first OR last name
            } else if (last == null &&
                        peoplesListObj[i].firstName.toLowerCase() === first ||
                        peoplesListObj[i].lastName.toLowerCase() === first) {
                //...append this person to the results
                result.appendChild(generateResult(i));
            }
        }
        //if after all of that the results are empty add no person found
        if (result.innerHTML === "") {
            let temp = document.createElement("p");
            temp.innerText = "No person found.";
            result.appendChild(temp);
        }
        //add result to output
        outPut.appendChild(result);
    } else {
        //if name was blank...
        outPut.innerHTML = "<h3>Need a name to search, try first and/or last</h3>";
    }
}