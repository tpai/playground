const getIdFrom = require('./index');

test('get id from short url', () => {
    expect(getIdFrom('/p/289ef77')).toBe('289ef77');
});

test('get id from short url with query', () => {
    expect(getIdFrom('/p/289ef77?ts=1500361618072')).toBe('289ef77');
});

test('get id from regular url', () => {
    expect(getIdFrom('/coco/2017-new-lemon-juice-289ef77')).toBe('289ef77');
});

test('get id from regular url with query', () => {
    expect(getIdFrom('/coco/2017-new-lemon-juice-289ef77?ts=1500361618072')).toBe('289ef77');
});

test('get id from broken url without title', () => {
    expect(getIdFrom('/coco/-289ef77')).toBe('289ef77');
});

test('get id from url which contains id only', () => {
    expect(getIdFrom('/coco/289ef77')).toBe('289ef77');
});

test('get id from vip url', () => {
    expect(getIdFrom('/2017-new-lemon-juice-289ef77')).toBe('289ef77');
});

test('get id from vip url with query', () => {
    expect(getIdFrom('/2017-new-lemon-juice-289ef77?ts=1500361618072')).toBe('289ef77');
});
