// Absolute Values Sum Minimization
function absoluteValuesSumMinimization(a) {
    //find the median
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 - 1] : a[ Math.floor(a.length / 2) ];
    //if even, divide array length by 2, then minus one 
    //if odd, divide array length by 2
}

console.log( absoluteValuesSumMinimization( [2,4,7,6]) );
console.log( absoluteValuesSumMinimization( [2,4,8,6,12]) );
console.log( absoluteValuesSumMinimization( [2,4,3,6,6,8]) );
console.log( absoluteValuesSumMinimization( [2,4,3,6,6,8,9]) );