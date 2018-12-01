const { 'default': compile, HtmlRenderer } = require('azoth-compiler');
const createFilter = require('rollup-pluginutils');

const node_modules = /node_modules/;
const notInNodeModules = id => !node_modules.test(id);

const getCompileOptions = options => {
    if(!options.onhtml) return;
    return { htmlRenderer: new HtmlRenderer() };
};

module.exports = function(options = {}){
    const filter = options.include || options.exclude
        ? createFilter(options.include, options.exclude)
        : notInNodeModules;

    const compileOptions = getCompileOptions(options);

    return {
        transform(code, id){
            if (!filter(id)) return null;
            try {
                return compile(code, compileOptions);
            }
            catch(err) {
                this.error(`A problem happened when compiling ${id}. Error was: ${err.message}`);
            }
        },
        generateBundle(_outputOptions, _bundle, isWrite) {
            if(!isWrite || !compileOptions || !options.onhtml) return;
            options.onhtml(compileOptions.htmlRenderer.map);
        },
        name: 'azoth-compiler'
    };
};