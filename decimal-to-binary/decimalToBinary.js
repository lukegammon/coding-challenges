function addBinary(a,b) {
    const sum = a + b;
    // returns sum in base 2 (binary number) from original base 10 (decimal number) 
    return sum.toString(2);
}

addBinary(1, 1) // returns: 10