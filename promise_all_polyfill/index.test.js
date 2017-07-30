const promiseAll = require('./index');

test('promiseAll should return Promise', () => {
    expect(promiseAll([]) instanceof Promise).toBe(true);
});

test('input non-promise array should return the same output', async () => {
    const input = [1, [2], function() { return 3; }];
    const received = await promiseAll(input);
    const expected = await Promise.all(input);
    expect(received).toMatchObject(expected);
});

test('input promise array should return the result of each promise', async () => {
    const input = [
        new Promise(function(resolve) { resolve(1); }),
        new Promise(function(resolve) { resolve(2); }),
        new Promise(function(resolve) { resolve(3); })
    ];
    const received = await promiseAll(input);
    const expected = await Promise.all(input);
    expect(received).toMatchObject(expected);
});

test('input promise array which contains reject action should return error message', async () => {
    const input = [
        new Promise(function(resolve) { resolve(1); }),
        new Promise(function(resolve) { resolve(2); }),
        new Promise(function(resolve, reject) { reject(3); })
    ];
    let received, expected;
    try {
        await promiseAll(input);
    } catch(err) {
        received = err;
    }
    try {
        await Promise.all(input);
    } catch(err) {
        expected = err;
    }
    expect(received).toBe(expected);
});
