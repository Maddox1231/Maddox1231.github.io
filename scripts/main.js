
console.log("first 10 square numbers:");
for (let i = 1; i <= 10; i++) {
    console.log(i + "*" + i + " = " + (i * i));
}


console.log("countdown");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("blastoff");


console.log("even numbers from 1 to 50");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("sum of 1 through 100", sum);


console.log("first 10 factorials");
for (let i = 1; i <= 10; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    console.log(i + "!" + " = " + factorial);
}