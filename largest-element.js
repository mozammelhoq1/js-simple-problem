const ages = [ 12, 234, 34, 4, 64, -653, -652, 456, -734];

function findLargest(numbers){
    let largest = numbers[0];
    for( let i = 0; i < numbers.length; i ++){
        const element = numbers[i];
        if ( element > largest){
            largest = element;
        }
    }
    return largest;
}

const largestNumber = findLargest(ages);
console.log("largest number is : " , largestNumber);