// Question 3
// Create an array of objects with objects having the following properties
// A. {name (string), age (number), country (string), hobbies array (string [ ] ) }
// B. Write a function to display all the objects on the console

let details = [
    {name:"vara",
    age:"33",
    country:"india",
    hobbies:["studying","dancing"]},
    {name:"hari",
    age:"24",
    country:"india",
    hobbies:["studying","travelling"]},
    {name:"anu",
    age:"23",
    country:"canada",
    hobbies:["studying","working"]}
    
];
details.forEach(function(details) {
    console.log(details)
});

// Question 4
// Following the 3rd question
// A. Write a function to display all the objects having age less than 30
// B. Write a function to display all the objects having country India

for (i = 0; i <= details[i].length; i++) {
    if (details[i].age < 30) {
      console.log(details[i]);
    }
} 
for (i = 0; i <= details[i]; i++) {
    if (details[i].country == India) {
      console.log(details[i])
    }
}
