function diffArray(arr1, arr2) {
    const results = arr1.filter(item => !arr2.includes(item));
    const results2 = arr2.filter(item => !arr1.includes(item));
    const finalArr = [];
    results.forEach(item => finalArr.push(item));
    results2.forEach(item => finalArr.push(item));
    console.log(finalArr);
    return finalArr;
}

  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) // returns: 4
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // returns: ['pinnk wool']
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // returns: ['pink wool', 'diorite']
