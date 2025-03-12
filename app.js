const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
const people = [
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];
const travelMethods = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const devs = [
  { name: "Alex", year: 1988 },
  { name: "Dani", year: 1986 },
  { name: "Matt", year: 1970 },
  { name: "Wes", year: 2015 },
];
const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
const veryOldInventors = inventors.filter((inventor, index) => {
  return inventor.year < 1600 && inventor.year > 1500;
});

const inventorNames = inventors.map((inventor, index) => {
  return { first: `${inventor.first}`, last: `${inventor.last}` };
});

// Complete the exercise in the space below:
const sortedByBirthYear = inventors.sort((a, b) => {
  return a.year - b.year;
});

const inventorNamedAda = inventors.find((inventor) => {
  return inventor.first === "Ada";
});
const firstLast = people.map((person)=>{
    temp = person.split(",")
    first = temp[1]
    last = temp[0]
    person = `${first} ${last}`
    return person 
})
isAdultPresent = devs.some((dev)=>{
return 2025- dev.year >18
})

isEveryone19OrOlder = devs.every((dev)=>{
  return 2025- dev.year >19
})

let commentById = {};

// Complete the exercise in the space below:
commentById = comments.find((comment)=>{
return comment.id === 823423
})

/*
// Exercise 9: Array.prototype.findIndex()

// Determine the index of the comment that has a specific ID 123523 in an array
// of comment objects.

// - Store the index in the variable 'idx'.
// */

// let idx = null;

// // Complete the exercise in the space below:
idx = comments.findIndex((comment,index)=>{
if(comment.id === 123523){
  return index

}
  
})

// // Check your work:
console.log('Exercise 9 my result: ', idx);
console.log('Exercise 9 correct result: ', 3);
