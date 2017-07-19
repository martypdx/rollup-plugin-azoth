const compile = require('azoth-compiler');
const createFilter = require('rollup-pluginutils');

const node_modules = /node_modules/;
const notInNodeModules = id => !node_modules.test(id);

module.exports = function(options = {}){
    const filter = options.include || options.exclude
        ? createFilter(options.include, options.exclude)
        : notInNodeModules;
    
    return {
        transform(code, id){
            if (!filter(id)) return null;
            return compile(code);
        },
        name: 'azoth-compiler'
    };
};