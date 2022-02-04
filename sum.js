const numbers = [ 12, 34, 5, 56, 21, 7];

function sumResult(perameter){
    let sum = 0;
    for( let i = 0; i < perameter.length; i++ ){
        const element = perameter[i];
        sum = sum + element;
    }
    return sum;
}
const total = sumResult(numbers);
console.log(total);