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
        return cleanArticleId(short.id);
    } else if (regular) {
        return matchArticlePath(regular.article).id;

    } else if (vip) {
        return matchArticlePath(vip.article).id;
    }
}

function matchArticlePath(str) {
    const matches = /(\S{1,})-([0-9a-z]{1,})$/mig.exec(str);
    const title = matches[1];
    const id = matches[2];
    return { title, id };
}

function cleanArticleId(id) {
    return /[0-9a-z]{1,}/.exec(id).pop();
}

module.exports = getIdFrom;
