const route = require('path-match')({
    sensitive: false,
    strict: false,
    end: false
})

function getIdFrom(path) {
    const short = route('/p/:id')(path);
    const regular = route('/:user/:article')(path);
    const vip = route('/:article')(path);
    if (short) {
        return cleanArticleId(short.id);
    } else if (regular) {
        return matchArticlePath(regular.article).id;

    } else if (vip) {
        return matchArticlePath(vip.article).id;
    }
}

function matchArticlePath(str) {
    const matches = /([0-9a-z]{1,})-(\S{1,})-([0-9a-z]{1,})/ig.exec(str);
    const category = matches[1];
    const title = matches[2];
    const id = matches[3];
    return { category, title, id };
}

function cleanArticleId(id) {
    return /[0-9a-z]{1,}/.exec(id).pop();
}

module.exports = getIdFrom;
