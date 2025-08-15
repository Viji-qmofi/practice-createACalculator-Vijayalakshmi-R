const calculatorObj = {
//task 1
absVal : function (num) {
  return Math.abs(num);
},

//task 2
powCalc : function(num, pow) {
  return Math.pow(num, pow);
},

//task 3
calcSqrt : function(num) {
  return Math.sqrt(num);
},

//task 4
calcMinMax : function (arr) {
      console.log(Math.min(...arr), Math.max(...arr));
},

//task 5
randNum : function (x, y) {
  return Math.floor(Math.random() * y + x);
},
//task 6
roundCalc : function (x,y) {
    return Math.round(x*Math.pow(10,y)/Math.pow(10,y));
}
}


console.log(` User Choices:
1. Absolute Value
2. Power
3. Square Root
4. Max and Min
5. Random
6. Round\n `);

// Get User choices.
const inputSel = require('readline-sync');

let userChoice;// = inputSel.question("Enter any of your choices from the above list\n");

do {
    userChoice = inputSel.question("Enter any of your choices from the above list\n");

if(userChoice === "Absolute Value"){

    console.log(calculatorObj.absVal(-45.67));
    
    
}
else if(userChoice === "Power")
    console.log(calculatorObj.powCalc(5, 3));
     

else if(userChoice === "Square Root"){
    console.log(calculatorObj.calcSqrt(144));
     
}

else if(userChoice === "Max and Min"){
    const numArray = [3, 78, -12, 0.5, 27];
    calculatorObj.calcMinMax(numArray);
 
}

else if(userChoice === "Random"){
    console.log(calculatorObj.randNum(1, 50));
     
}

else if(userChoice === "Round"){
    console.log(calculatorObj.roundCalc(23.67891,2));
     
}

} while(userChoice !== "Done");



