function whatIsInAName(collection, source) {
    const keys = Object.keys(source);
    const arr = collection.filter(object => {
        for(let key of keys) {
            if(!object.hasOwnProperty(key) || object[key] !== source[key]) {
                return false;
            }
        }
        return true;
    })
    console.log(arr);
    return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // returns: [ { first: 'Tybalt', last: 'Capulet' } ]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) // returns: [ { "apple": 1, "bat": 2, "cookie": 2 } ]