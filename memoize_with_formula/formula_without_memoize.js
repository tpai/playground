const memoize = require('fast-memoize');

function factorial(m) {
    return m <= 1 ? m : m * factorial(m - 1);
}

function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function prime(p) {
    return p > 1 ? isPrime(p) ? [p].concat(prime(--p)) : prime(--p) : [];
}

function isPrime(o) {
    let mid = Math.floor(Math.sqrt(o));
    while(mid > 1) {
        if (o % mid === 0)return false;
        mid--;
    }
    return true;
}

module.exports = {
    factorial,
    fibonacci,
    prime,
    isPrime
};
