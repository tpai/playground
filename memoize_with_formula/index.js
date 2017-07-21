const exec = require('child_process').exec;

exec('node ./memoize_with_formula/regular.js', function(error, stdout, stderr) {
    console.log(stdout);
    if (stderr) {
        console.log('stderr: ' + stderr);
    }
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});

exec('node ./memoize_with_formula/fast_memoize.js', function(error, stdout, stderr) {
    console.log(stdout);
    if (stderr) {
        console.log('stderr: ' + stderr);
    }
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
