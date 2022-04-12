const numbers: number[]; // Must be initialized
const numbers2: number[] = [];

numbers2.push(1);

const numbers3 = [1, 3, 5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

for (let i in numbers) {
  console.log(numbers[i]);
}

numbers.forEach(function (num) {
  console.log(num);
});
