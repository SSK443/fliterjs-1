number = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//even number use filter
even = number.filter((num) => num % 2 == 0);
console.log(even);
//highest number >11
highest = number.filter((num) => num > 11);
console.log(highest);
// odd number use filter
odd = number.filter((num) => num % 2 !== 0);
console.log(odd);
