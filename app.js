
var ds = require('process-dataset');
var submodule = require('submodule');

ds.set(1, 'one');
ds.dump();

submodule();
ds.set('oneone', '11');
ds.set(2, 'two');
submodule.dump();

submodule.fixdataset();
submodule.dump();

var cloned = ds.clone();
ds.set('new', 'shouldn`n be in cloned object');

console.log('cloned: ', cloned);
console.log('original: ');
ds.dump();
console.log('keys: ', ds.keys());

ds.drop('oneone', 2, 'fivefive');
ds.drop();
ds.drop(1);
ds.drop('prototype');
console.log('original after drops: ');
ds.dump();
