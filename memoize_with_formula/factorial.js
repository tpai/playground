var Benchmark = require('benchmark');

function factorial1(v) {
  return v === 0 ? 1 : v * factorial1(v - 1);
}

function factorial2(v) {
  return v ? v * factorial2(v - 1) : 1;
}

var suite = new Benchmark.Suite;
suite
  .add('factorial1', function() {
    factorial1(21);
  })
  .add('factorial2', function() {
    factorial2(21);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('\nFastest is ' + this.filter('fastest').map('name'));
  })
  .run({'async': true});
