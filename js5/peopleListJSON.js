/*
    Filename: peopleListJSON.js
	Robert Cox
	2/5/2020
	url: http://rcox.greenriverdev.com/IT328/js-exercises/js5/json-search.html

    Creates a stringified js object for parsing in json-search.js.
 */

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