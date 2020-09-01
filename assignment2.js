// Question 1
// Program to search for a particular character in a string
let data="vara sajjanapu";
let index=data.indexOf("r");
console.log(index);


// Question 2
// Program to convert minutes to seconds
let mins=40;
console.log(mins * 60);


// Question 3
// Program to search for a element in a array of strings
let data = ["eye-liner","lipstick","cream","concealer","mascara","kajal"];
console.log(data[2]);


// Question 4
// Program to display only elements containing 'a' in them from a array
let data = ["eye-liner","lipstick","kajal"];

for(let i=0;i<data.length;i++) {
if(data[i].includes("a")) {
    console.log(data[i]);
}
}

// Question 5
// Print an array in reverse order
let data = ["eye-liner","lipstick","cream","concealer","mascara","kajal"];

console.log(data.reverse());

// or we can write as the below.
console.log(data);
data.reverse();
console.log(data);