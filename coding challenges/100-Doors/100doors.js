function getFinalOpenedDoors(numDoors) {
    // create Array of length (numDoors) with values:
    // true = open, false = closed
    const doorArray = Array(numDoors).fill(false);
  
    // function to swap door state from closed->open or open->closed
    function swap(number) {
      if(number === true) {
        return false
      }
      return true;
    }
    // loop over all doors numDoors times
    let count = 1;
    while(count <= numDoors) {
      for(let i = count; i <= numDoors; i += count) {
        doorArray[i - 1] = swap(doorArray[i - 1]);
      }
      count++;
    }
    // create new array for all open doors and append all true values from  doorArray
    const doorNumbersOpen = [];
    doorArray.forEach((number,index) => {
      if(number === true) {
        doorNumbersOpen.push(index + 1);
      }
    })

    return doorNumbersOpen;
  }

const result = getFinalOpenedDoors(100); 
console.log(result); // [1,  4,  9, 16,  25, 36, 49, 64, 81, 100]
