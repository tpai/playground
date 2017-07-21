let {
    factorial,
    fibonacci,
    prime
} = require('./formula');

let execTimeStart, execTime, totalTime;

totalTime = 0;
for(var i=1;i<=100;i++) {
    execTimeStart = Date.now();
    factorial(i);
    execTime = Date.now() - execTimeStart;
    totalTime += execTime;
}
console.log(`100! totalTime=${totalTime}ms`);

totalTime = 0;
for(var i=1;i<=40;i++) {
    execTimeStart = Date.now();
    fibonacci(i);
    execTime = Date.now() - execTimeStart;
    totalTime += execTime;
}
console.log(`f(40) totalTime=${totalTime}ms`);

totalTime = 0;
for(var i=1;i<=5000;i++) {
    execTimeStart = Date.now();
    prime(i);
    execTime = Date.now() - execTimeStart;
    totalTime += execTime;
}
console.log(`p(5000) totalTime=${totalTime}ms`);
