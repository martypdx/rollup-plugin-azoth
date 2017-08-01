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
            try {
                return compile(code);
            }
            catch(err) {
                this.error(`A problem happened when compiling ${id}. Error was: ${err.message}`);
            }
        },
        name: 'azoth-compiler'
    };
};