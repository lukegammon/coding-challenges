function destroyer(arr) {
    const args = Array.from(arguments); // convert function arguments to an array 
    const items = args.shift() // remove first part of args array and asign to new array
    const result = items.filter(item => !args.includes(item)); // array of only non matching items in both above arrays
    return result;
}
  
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // returns: [1, 5, 1] as 1, 5, 1 are not in second set of arguments