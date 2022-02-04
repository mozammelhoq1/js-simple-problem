const business = 450;
const minister = 451;
const army = 452;

if( business> minister){
    console.log("business person er pola is bigger");
}
else{
    console.log("minister person er pola is bigger");
}

if( business > minister && business > army){
    console.log("business person er pola boro");
}
else if( minister > business && minister > army){
    console.log( " minister person er pola boro");
}
else{
    console.log("army person er pola boro");
}

var max = Math.max( business, minister, army);
console.log("Math.max boro lok is : ", max);


const first = 100;
const second = 200;
const third = 300;

function large( first, second, third){
    if( first > second && first > third){
        return first;
    }
    else if ( second > first && second > third){
        return second;
    }
    else {
        return third;
    }
}

const largest = large(first, second, third);
console.log(" largest number is : " , largest);


function small( first, second, third){
    if( first < second && first < third){
        return first;
    }
    else if ( second < first && second < third){
        return second;
    }
    else {
        return third;
    }
}

const smalest = small(first, second, third);
console.log("   small number is" , smalest);