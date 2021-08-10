function sumAll(arr) {
    arr.sort((a,b) => a - b); // sort the array lowest number first
    const basicSum = arr[0] + arr[1];
    const numbersBetween = [];
    for(let i = arr[0] + 1; i < arr[1]; i++) {
        numbersBetween.push(i);
    }
    const sum = numbersBetween.reduce((accumulator, current) => accumulator + current) + basicSum;
    console.log(sum);
    return sum;
}
  
sumAll([1, 4]); // returns: 10 because (1 + 4) + 2 + 3 = 10
sumAll([5, 10]) // returns: 45 because (5 + 10) + 6 + 7 + 8 + 9 = 45
sumAll([10, 5]) // sorted array so actually sumAll([5, 10]) returns: 45 because (5 + 10) + 6 + 7 + 8 + 9 = 45