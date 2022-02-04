// give a positive value

const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);


// give a uper value 

const myNumber1 = 6.99;
const output1 = Math.ceil(myNumber1);
console.log(output1);


// give a under value 

const myNumber2 = 6.99;
const output2 = Math.floor(myNumber2);
console.log(output2);


// give a round figure value 

const myNumber3 = 6.51;
const output3 = Math.round(myNumber3);
console.log(output3);


// give a round number 

const output4 = Math.random() * 6;
const rounded = Math.floor(output4);
console.log(rounded);


// give random number inside for loop 

for( let i = 0; i <= 20; i++){
    const output5 = Math.random() * 20;
    const rounded1 = Math.round(output5);
    console.log(rounded1);
}