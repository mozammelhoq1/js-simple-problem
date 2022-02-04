/* const fibo = [0, 1];
for ( let i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i-2];
}
console.log(fibo); */
const numbers = 10;
function fibonacci(number){
    if( typeof number != "number"){
        return "please give a number";
    }
    if( number < 2){
        return " please enter a positive number greater then 1";
    }
    const fibo = [0,1];
    for ( let i = 2; i < number; i++){
        fibo[i] = fibo[i - 1] + fibo[i-2];
    }
    return fibo;
}
const fibonacciSeries =  fibonacci(numbers);
console.log(fibonacciSeries);