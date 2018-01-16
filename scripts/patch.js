const rimraf = require('rimraf');

console.log('Removing @types/node to avoid type errors caused by parse5...');
rimraf.sync('./node_modules/@types/node');
// For more info see: https://github.com/inikulin/parse5/issues/220
