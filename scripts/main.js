

console.log("Task 1");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}


console.log("Task 2");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff!");


console.log("Task 3");
for (let i = 1; i <= 50; i++) 
    if (i % 2 === 0) {
        console.log(i);
    }

console.log("Task 4");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


console.log("Task 5");
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
    console.log(factorial);
}
console.log("Task 6")
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i <= arr.length - 1; i++) {
   console.log(arr[i]);
}

console.log("Task 7");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr.at(i));
}

console.log("Task 8");
let cubeNumbers = [];
for (let i = 1; i <= 10; i++) {
    cubeNumbers.push(i ** 3);
}
console.log(cubeNumbers);

console.log("Task 9");
let fibonacciNumbers = [];
fibonacciNumbers[0] = 0;
fibonacciNumbers[1] = 1;
for (let i = 2; i < 10; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
}
console.log(fibonacciNumbers);

console.log("Task 10");
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log(reversedArr);

let colors = ["red","orange","yellow","green","blue","indigo","violet"];
let ul = document.createElement("ul");
for (let i = 0; i < colors.length; i++) {
   let li = document.createElement("li");
   li.append(colors[i]);
   li.style.color = colors[i]
   ul.appendChild(li);
}


document.body.appendChild(ul);