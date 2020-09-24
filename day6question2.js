// Question 2
// Create a blank array and later on create a add bus functionality bus object contains {name, source,
// destination, number, passenger capacity}
// A. A form to add new bus
// B. Display data in table format
// C. Search by source and destination
// D. Data should be stored permanently in localstorage

window.onload=function()
{
let businfo=
[
    
    {
      name:"vara",
      source:"hyd",
      destination:"Jaipur",
      number:"h4821t7",
      passenger_capacity:"150",
    },

    {
        name:"hari",
        source:"Delhi",
        destination:"hyd",
        number:"85089uf",
        passenger_capacity:"180",
    },

      {
        name:"cha",
        source:"hyd",
        destination:"Banglore",
        number:"ff213bfr",
        passenger_capacity:"130",
      },

      {
        name:"su",
        source:"gujarat",
        destination:"hyd",
        number:"dvfdb4w",
        passenger_capacity:"250",
      },

      {
        name:"anu",
        source:"hyd",
        destination:"Delhi",
        number:"oiy4gf",
        passenger_capacity:"200",
      },
];
if(localStorage.getItem("bus")==null)
    {

      localStorage.setItem("bus",JSON.stringify(businfo));
    }
}


function display(supperarray = undefined) 
{

let tabledata=""; 
let buss;
if (supperarray==undefined)
  {
    buss=JSON.parse(localStorage.getItem("bus"));
  }
else
  {
    buss = supperarray;
  }
    buss.forEach(function(buss,index)
    {
        let newtable=`<tr>
        <td>${index+1}</td>
        <td>${buss.name}</td>
        <td>${buss.source}</td>
        <td>${buss.destination}</td>
        <td>${buss.number}</td>
        <td>${buss.passenger_capacity}</td>
        </tr>`;

        tabledata +=newtable; 
    });
      document.getElementById("tdata").innerHTML = tabledata; 
      
}

display();

function addbus(event) 

{
    event.preventDefault(); 
    let buss={};
    let name=document.getElementById('name').value;
    let source=document.getElementById('source').value;
    let destination=document.getElementById('destination').value;
    let number=document.getElementById('number').value;
    let passenger_capacity=document.getElementById('passenger_capacity').value;
    buss.name = name;
    buss.source = source;
    buss.destination= destination;
    buss.number = Number(number);
    buss.passenger_capacity=Number(passenger_capacity);

    let bus=JSON.parse(localStorage.getItem("bus"));
    bus.push(buss);
    localStorage.setItem("bus",JSON.stringify(bus));
    
    display();
    document.getElementById('name').value="";
    document.getElementById('source').value="";
    document.getElementById('destination').value="";
    document.getElementById('number').value="";
    document.getElementById('passenger_capacity').value="";
}

function searchSource()
{
     let searchValue =document.getElementById("searchsource").value;
     let bus=JSON.parse(localStorage.getItem("bus"));
     let newdata= bus.filter(function(buss)
    
     {
         return buss.source.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); 
}

function searchDestination()
{
     let searchValue =document.getElementById("searchdestination").value;
     let bus=JSON.parse(localStorage.getItem("bus"));
     let newdata= bus.filter(function(buss)
    
     {
         return buss.destination.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });

     display(newdata); 
}
