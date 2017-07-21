const memoize = require('fast-memoize');
const store = require('lru-cache')({
    max: 500,
    maxAge: 1000 * 60 * 60
});

const memoiz = fn => {
    return prefix => memoize(fn, {
        cache: {
            create: () => ({
                has: (key) => store.has(`${prefix}_${key}`),
                get: (key) => store.get(`${prefix}_${key}`),
                set: (key, value) => store.set(`${prefix}_${key}`, value)
            })
        }
    })
}

function factorial(m) {
    const memoized = memoiz(factorial)('factorial');
    return m ? m * memoized(m - 1) : 1;
}

function fibonacci(n) {
    const memoized = memoiz(fibonacci)('fibonacci');
    return n < 2 ? n : memoized(n - 1) + memoized(n - 2);
}

function prime(p) {
    const memoized = memoiz(prime)('prime');
    return p > 1 ? isPrime(p) ? [p].concat(memoized(--p)) : memoized(--p) : [];
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
