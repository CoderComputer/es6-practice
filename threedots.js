const ages = [10,11,2,13,14,15,6];
const ages2 = [20,21,22,223,24,252,26];
// const addArray = ages.concat(ages2).concat([1005000]);
// console.log(addArray);

console.log([...ages,...ages2,1005000]);