import common from 'rollup-plugin-commonjs';
const azoth = require('../index.js');

export default {
    input: `${__dirname}/azoth-test.js`,
    plugins: [
        common(),
        azoth()
    ],
    output: {
        banner: '/* eslint indent: off, no-undef: off */',
        format: 'iife',
        globals: {
            azoth: 'azoth',
            'rxjs-es': 'rxjs'
        },
        file: `${__dirname}/azoth-compiled.js`

    },
    external: [ 'azoth', 'rxjs-es' ],
}; 