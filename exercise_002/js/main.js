const getBiggest = array => array.reduce((accumulator, element) => accumulator > element ? accumulator : element)
const biggest = getBiggest([120, -1123, 1320, 1, 0, 12]);
console.log(biggest);