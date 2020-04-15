const array = [0, 1, 2, 3, 4];

// console.log(array.reduce((prev, cure) => prev + cure));

const obj = [
  {value: 1, value2: 10},
  {value: 2,},
  {value: 3}
]

console.log(obj.reduce(((total, current) => total + current.value), 0))
