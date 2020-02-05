let peopleList = JSON.stringify([
        {
            "firstName": "Jane",
            "lastName": "Doe",
            "sex": "f",
            "born": "1876",
            "died": "1956",
            "father":
                {
                    "firstName": "Petreus",
                    "lastName": "de Milliano"
                },
            "mother":
                {
                    "firstName": "Sophia",
                    "lastName": "van Damme"
                }
        },

        {
            "firstName": "Jane",
            "lastName": "Ramirez",
            "sex": "f",
            "born": "1102",
            "died": "--",
            "father":
                {
                    "firstName": "Themistocles",
                    "lastName": "Merovech"
                },
            "mother":
                {
                    "firstName": "Amara",
                    "lastName": "Floros"
                }
        },

        {
            "firstName": "Baby",
            "lastName": "Bear",
            "sex": "m",
            "born": "1981",
            "died": "--",
            "father":
                {
                    "firstName": "Papa",
                    "lastName": "Bear"
                },
            "mother":
                {
                    "firstName": "Mama",
                    "lastName": "Bear"
                }
        },

        {
            "firstName": "Baby",
            "lastName": "Rabbit",
            "sex": "f",
            "born": "1992",
            "died": "--",
            "father":
                {
                    "firstName": "Papa",
                    "lastName": "Rabbit"
                },
            "mother":
                {
                    "firstName": "Mama",
                    "lastName": "Rabbit"
                }
        },

        {
            "firstName": "Baby",
            "lastName": "Doe",
            "sex": "f",
            "born": "1937",
            "died": "1936",
            "father":
                {
                    "firstName": "Papa",
                    "lastName": "Buck"
                },
            "mother":
                {
                    "firstName": "Mama",
                    "lastName": "Doe"
                }
        }
    ]);

let peoplesListObj = JSON.parse(peopleList);

let outPut = document.getElementById("result");
let searchInput = document.getElementById("name-searched");
let result = document.createElement("p");

document.getElementById("submit").onclick = process;

//enter is pressed after input, clicks the Go! button
searchInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

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

function process() {
    outPut.innerHTML = "";

    if (searchInput.value.trim() !== "") {

        result.innerHTML = "";
        let fullName = searchInput.value.split(" ");
        let first = fullName[0].trim().toLowerCase();
        let last;

        if (fullName.length > 1) {
            last = fullName[1].trim().toLowerCase();
        }

        for (let i = 0; i < peoplesListObj.length; i++) {

            if (peoplesListObj[i].firstName.toLowerCase() === first &&
                peoplesListObj[i].lastName.toLowerCase() === last) {


                result.appendChild(generateResult(i));

            } else if (last == null &&
                        peoplesListObj[i].firstName.toLowerCase() === first ||
                        peoplesListObj[i].lastName.toLowerCase() === first) {

                result.appendChild(generateResult(i));
            }
        }

        if (result.innerHTML === "") {
            let temp = document.createElement("p");
            temp.innerText = "No person found.";
            result.appendChild(temp);
        }
        outPut.appendChild(result);
    } else {
        outPut.innerHTML = "<h3>Need a name to search, try first and/or last</h3>";
    }
}