module.exports = function(promises) {
    var resolved = [];
    var index = promises.length;
    return new Promise(function(resolve, reject) {
        promises.forEach(function(promise) {
            if (promise instanceof Promise) {
                return promise.then(function(res) {
                    resolved.push(res);
                    if(--index === 0)resolve(resolved);
                }, function(err) {
                    reject(err);
                });
            } else {
                resolved.push(promise);
                if (--index === 0)resolve(resolved);
            }
        });
    });
}
