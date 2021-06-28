// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  const today = currentDate.toUTCString()

  document.getElementById("display-element").innerHTML = today;
}


// Write a JavaScript program to convert a number to a string..

const numberString = (val) => {
  const num = parseInt(val)
  transfer = num;
}
let transfer;

const numberStringRun = () => {
const str = transfer.toString()
  document.getElementById("number-string").innerHTML = str
}


// Write a JavaScript program to convert a string to the number.


const stringNumber = (val) => {
  const num1 = parseInt(val);
  str1 = num1;
  console.log(str1);
}
let str1;

const stringNumberRun = () => {
  document.getElementById("string-number").innerHTML = str1;
}
 





// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean -
  // * Null
  // * Undefined-
  // * Number-
  // * NaN
  // * String-

const findNumberDataType = (val) => {
  const num1 = parseInt(val);
  typeAnswer1 = num1;
}
const findOtherDataType = (val) => {
  const num1 = (val);
  typeAnswer1 = num1;
}

let strNumber1;


// **************************I figured out how to check for a number*******************************
const findDataTypeRun = (sn1) => {
  if(typeof(typeAnswer1) === "number"){
    //console.log('testing')
    typeAnswer = "Type is number";
    document.getElementById("find-data-type").innerHTML = typeAnswer;
// ***************OK i am confused input box hand over a string how to I get it the answer anything other than string**************

  } else if (typeof(typeAnswer1) === "string") {
    typeAnswer = "Type is a string"
    document.getElementById("find-data-type").innerHTML = typeAnswer;
  } 
}




console.log(typeof(true))
console.log(typeof("string thing"))
console.log(typeof([]))
console.log(typeof(whatIsThis))
console.log(typeof(5))


  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers1 = (val) => {
  stringNumber(val);
  stradd1 = str1;
  console.log(stradd1 +  " this one srtadd1")
}

let stradd1;

const addTwoNumbers2 = (val) => {
  stringNumber(val);
  stradd2 = str1;
  console.log(stradd2 +  " this one stradd2")
}

let stradd2;

const addTwoNumbersRun = () => {
    
    const together =  stradd1 + stradd2;
    //console.log(together + "add1 + add2")
    document.getElementById("addTwoNumbers").innerHTML = together;

}
   

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue1 = (val) => {
  stringNumber(val);
  strtrue1 = str1;
  console.log(strtrue1 +  " this one srtadd1")
}

let strtrue1;

const bothTrue2 = (val) => {
  stringNumber(val);
  strtrue2 = str1;
  console.log(strtrue2 +  " this one stradd2")
}

let strtrue2;

const bothTrueRun = () => {
  if (strtrue1 && strtrue2){
    bothTrueAnswer = "both are true";
    document.getElementById("bothTrue").innerHTML = bothTrueAnswer;
  } 
  //   else {
  //   notBothTrue = "This should not run but I wanted to make sure I could do it."
  //   document.getElementById("bothTrue").innerHTML = notBothTrue;
  // }
}

// const areBothTen = (num1, num2) => {
//   if (num1 === 10 && num2 === 10){
//     return "both are true"
//   } else {
//     return "both are not true"
//   }
// }
// console.log(areBothTen(10,10));


// Write a JavaScript program that runs when 1 of 2 things are true.

const oneIsTrue1 = (val) => {
  stringNumber(val);
  strOneTrue1 = str1;
  console.log(strOneTrue1 +  " this one srtOneTrue1")
}

let strOneTrue1;

const oneIsTrue2 = (val) => {
  stringNumber(val);
  strOneTrue2 = str1;
  console.log(strOneTrue2 +  " this one strOneTrue2")
}

let strOneTrue2;

const oneIsTrueRun = () => {
  if (strOneTrue1 || strOneTrue2){
    oneIsTrueAnswer = "At least one of these is true";
    document.getElementById("oneIsTrue").innerHTML = oneIsTrueAnswer;
  } 
  //   else {
  //   BothNotTrue = "This should not run but I wanted to make sure I could do it."
  //   document.getElementById("oneIsTrue").innerHTML = BothNotTrue;
  // }
}



// const areOneTen = (num1, num2) => {
//   if (num1 === 10 || num2 === 10){
//     return "one is true"
//   } else {
//     return "neither are not true"
//   }
// }
// console.log(areOneTen(10,10));

// Write a JavaScript program that runs when both things are not true.  


const bothNotTrue1 = (val) => {
  stringNumber(val);
  strNotTrue1 = str1;
  console.log(strNotTrue1 +  " this one srtNotTrue1")
}

let strNotTrue1;

const bothNotTrue2 = (val) => {
  stringNumber(val);
  strNotTrue2 = str1;
  console.log(strNotTrue2 +  " this one strNotTrue2")
}

let strNotTrue2;

const bothNotTrueRun = () => {
  if (!strNotTrue1 && !strNotTrue2){
    bothNotTrueAnswer = "both are not true";
    document.getElementById("bothNotTrue").innerHTML = bothNotTrueAnswer;
  } 
  //   else {
  //   notBothFales = "This should not run but I wanted to make sure I could do it."
  //   document.getElementById("bothNotTrue").innerHTML = notBothFales;
  // }
}




// const areOneNotTen = (num1, num2) => {
//   if (num1 === 10 || num2 === 10){
//     return "one is true"
//   } else {
//     return "neither are not true"
//   }
// }
// console.log(areOneNotTen(11,11));


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and   event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24



// let atLeastOne = function(thing1,thing2){

  // the input box always returns a string
  // you would have to convert the string to a boolean

//   if(thing1 || thing2){
//     return "doing something"
//   }
// }

// let x = 'true';
// let y = 'false';

// let booleanX;
// if(x == 'true'){
//   booleanX = true;
// }