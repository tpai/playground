const { parse } = require('url');
const route = require('path-match')({
    sensitive: false,
    strict: false,
    end: false
});

function getIdFrom(path) {
    const { pathname } = parse(path, true);
    const short = route('/p/:id')(pathname);
    const regular = route('/:user/:article')(pathname);
    const vip = route('/:article')(pathname);
    if (short) {
        return short.id;
    } else if (regular) {
        return matchArticlePath(regular.article);

    } else if (vip) {
        return matchArticlePath(vip.article);
    }
}

function matchArticlePath(str) {
    const idOnly = /([0-9a-z]{1,})$/mig.exec(str);
    return idOnly.pop();
}

module.exports = getIdFrom;
