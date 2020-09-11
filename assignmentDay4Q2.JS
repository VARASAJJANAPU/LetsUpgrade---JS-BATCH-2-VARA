// Question 2
// Create a webpage containing two input fields and a button.
// A. Write something in the first input
// B. On click of the button, the content of input one should be copied in the second input


function printValue(){
    var text1=document.getElementsByClassName("input1")
    var text2= document.getElementsByClassName("input2") 
    text2.value=text1.value;
   }

