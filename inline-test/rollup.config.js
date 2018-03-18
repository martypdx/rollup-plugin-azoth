import common from 'rollup-plugin-commonjs';
const azoth = require('../index.js');

export default {
    entry: 'test/azoth-test.js',
    format: 'iife',
    plugins: [
        common(),
        azoth()
    ],
    banner: '/* eslint indent: off, no-undef: off */',
    external: [ 'azoth', 'rxjs-es' ],
    globals: {
        azoth: 'azoth',
        'rxjs-es': 'rxjs'
    },
    dest: 'test/azoth-compiled.js'
}; 