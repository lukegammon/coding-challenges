function duplicateCount(text){
    let arr = text.toLowerCase().split("");
    let count = 0;
    let currentLetter = ""
    for(let i = 0 ; i < arr.length; i++) {
      currentLetter = arr[0];
      arr.shift();
      if(arr.indexOf(currentLetter) != -1) {
        arr = arr.filter(letter => letter != currentLetter);
        count++;
      }
    }
    return count;
  }

  duplicateCount("abcdaeb"); // returns: 2