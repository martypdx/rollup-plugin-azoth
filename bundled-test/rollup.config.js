const common = require('rollup-plugin-commonjs');
const azoth = require('../index.js');
const writeFile = require('util').promisify(require('fs').writeFile);

const azothPlugin = azoth({ 
    onhtml(htmlMap) {
        const html = [...htmlMap.entries()]
            .map(([id, html]) => `<template id="${id}">${html}</template>`)
            .join('\n');

        writeFile(`${__dirname}/templates.html`, html);
    }
});

export default {
    input: `${__dirname}/azoth-test.js`,
    external: [ 'azoth', 'rxjs-es' ],
    plugins: [
        common(),
        azothPlugin
    ],
    output: {
        format: 'iife',
        banner: '/* eslint indent: off, no-undef: off */',
        globals: {
            azoth: 'azoth',
            'rxjs-es': 'rxjs'
        },
        file: `${__dirname}/azoth-compiled.js`
    }
}; 