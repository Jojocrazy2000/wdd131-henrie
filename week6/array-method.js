const numbers = [1,2,3,4,5];
const users = [
    {user: 'Alice', age: 25, active: false},
    {user: 'Bob', age: 30, active: true},
    {user: 'Charlie', age: 35, active: true},
    {user: 'David', age: 40, active: false},
    {user: 'Eve', age: 45, active: true}
]

// numbers.forEach((num, index) => {
//     sum += num
//     console.log('[$index]')
// })

// const numbersDoubled = numbers.map((num) => {
//     return num *2;
// })

// Filter

// Even Numbers
// const evenNumbers = numbers.filter((num) => {
//     return num % 2 === 0;
// })
// console.log(evenNumbers)

const activeUser = users.filter((user) => {
    return user.active;
});


const InactiveUser = users.filter((user) => {
    return !user.active;
});
console.log(activeUser)
console.log(InactiveUser)

function sumNumbers(sum,total) {
    return total + sum;
}

const sum = numbers.reduce((num, total) => {
    return total + num;}
);
console.log(sum);

const averageAge = users.reduce((total, user) => {
    return total + user.age
}, 0) / users.length;

console.log(averageAge)
          