const getIdFrom = require('./index');

test('get article id from short url', () => {
    expect(getIdFrom('/p/289ef77')).toBe('289ef77');
});

test('get article id from short url with query', () => {
    expect(getIdFrom('/p/289ef77?ts=1500361618072')).toBe('289ef77');
});

test('get article id from regular url', () => {
    expect(getIdFrom('/coco/promo-2017_new_lemon_juice-289ef77')).toBe('289ef77');
});

test('get article id from regular url with query', () => {
    expect(getIdFrom('/coco/promo-2017_new_lemon_juice-289ef77?ts=1500361618072')).toBe('289ef77');
});

test('get article id from vip url', () => {
    expect(getIdFrom('/promo-2017_new_lemon_juice-289ef77')).toBe('289ef77');
});

test('get article id from vip url with query', () => {
    expect(getIdFrom('/promo-2017_new_lemon_juice-289ef77?ts=1500361618072')).toBe('289ef77');
});
