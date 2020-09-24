// Question 1
// Create a array containing five objects with properties { name, age , city , salary }
// A. Display all the objects in a table
// B. Create a search functionality for name and city
// C. Delete button to delete records
// D. Data is not permanent

let employee=[
    {
        // array containing objects having name ,age , city , Salary
        name:"varsha",
        age:23,
        city:"hyd",
        Salary:"50 Lakh",

    },

    {
        name:"hari",
        age:18,
        city:"hyd",
        Salary:"82 Lakh",

    },

    {
        name:"surya",
        age:30,
        city:"lucknow",
        Salary:"50,000",
    },

    {
        name:"Anu",
        age:20,
        city:"chennai",
        Salary:"30 Lakh",

    },
    

    {
        name:"chandu",
        age:44,
        city:"goa",
        Salary:"10 Lakh",

    },

    

];

function display(a) //defining a function (creating a dummy html)
{
let tabledata=""; //avoiding replacement of table data by one after another(new) row

    a.forEach(function(person,index)
    {
        let newtable=`<tr>
        <td>${index+1}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.Salary}</td>
        <td><button onclick="deleteperson(${index})">Delete</button></td>
        </tr>`;

        tabledata +=newtable; //new row will be added to existing data(row)
    });
    document.getElementById("tdata").innerHTML = tabledata; 
    // innerHTML gives us the content(inside) of the element (tag)
}
display(employee);

function searchByname()
{
     let searchValue =document.getElementById("searchName").value;
     let newdata= employee.filter(function(person)
    //  filter will go and check the name in the array whatever you searched for
    {
         return person.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); //displaying only filtered elements of the array
}

function searchBycity()
{
    let searchValue =document.getElementById("searchCity").value;
     let newdata= employee.filter(function(person)
    //  filter will go and check the name in the array whatever you searched for
    {
         return person.city.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); //displaying only filtered elements of the array
}

function deleteperson(index)
{
   employee.splice(index,1);
   display(employee);
}