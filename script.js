
// Practice dot and square-bracket notation
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Dot Notation
console.log(empireStateBuilding.squareFeet, empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength);

// Square-bracket Notation
let empireAddress = empireStateBuilding["address"];
console.log(empireAddress);

let dateOfConstruct = empireStateBuilding["constructionDate"];
console.log(dateOfConstruct);

let currentOwner = empireStateBuilding["owner"];
console.log(currentOwner);

let totalCost = empireStateBuilding["cost"];
console.log(totalCost);

let architectUsed = empireStateBuilding["architect"];
console.log(architectUsed);

// Arrays in Objects
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// list of names of part-time instructors
console.log('Part-time instructors:', nashvilleSoftwareSchool.instructors.partTime);

// list of names of full-time instructors
console.log('Full-time Instructors', nashvilleSoftwareSchool.instructors.fullTime);

// Output just Andy and Zoe in console
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);

 

