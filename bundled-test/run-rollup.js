const common = require('rollup-plugin-commonjs');
const azoth = require('../index.js');
const writeFile = require('util').promisify(require('fs').writeFile);

const rollup = require('rollup');

const azothPlugin = azoth({ mapHtml: true });

const inputOptions = {
    input: `${__dirname}/azoth-test.js`,
    external: [ 'azoth', 'rxjs-es' ],
    plugins: [
        common(),
        azothPlugin
    ]
};

const outputOptions = {
    format: 'iife',
    banner: '/* eslint indent: off, no-undef: off */',
    globals: {
        azoth: 'azoth',
        'rxjs-es': 'rxjs'
    },
    file: `${__dirname}/azoth-compiled.js`
};

async function build() {
    // create a bundle
    const bundle = await rollup.rollup(inputOptions);

    const html = [...azothPlugin.htmlMap.entries()]
        .map(([id, html]) => `<template id="${id}">${html}</template>`)
        .join('\n');

    writeFile(`${__dirname}/templates.html`, html);

    // or write the bundle to disk
    await bundle.write(outputOptions);
}

build();