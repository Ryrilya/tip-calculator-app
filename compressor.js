const minify = require('@node-minify/core');
const uglifyES = require('@node-minify/uglify-es');

minify({
  compressor: uglifyES,
  input: 'app/js/script.js',
  output: 'dist/js/script.min.js',
  options: {
    warnings: true,
    mangle: false,
  },
  callback: (err, min) => {},
});