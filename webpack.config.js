const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const join = path.join;
const resolve = path.resolve;
const NODE_ENV = process.env.NODE_ENV;

console.log("Starting with NODE_ENV='" + NODE_ENV + "'")

const root = resolve(__dirname);
const src = join(root, 'src');
const node_modules_path = join(root, 'node_modules');
const dest = join(root, 'dist');

const isDev = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';
const isProduction = NODE_ENV === 'production';

const dotenv = require('dotenv');

const dotEnvVars = dotenv.config();

const environmentEnv = dotenv.config({
    path: join(root, 'config', `${NODE_ENV}.config.env`),
    silent: false,
});

const envVariables = Object.assign({}, dotEnvVars, environmentEnv);

const defines = Object.keys(envVariables)
    .reduce((memo, key) => {
        const val = JSON.stringify(envVariables[key]);
        memo[`__${key.toUpperCase()}__`] = val;
        return memo;
    }, {
        __NODE_ENV__: JSON.stringify(NODE_ENV)
    });

if (isDev) {
    console.log("ENV", defines)
}

// Get basic configuration from hjs-webpack

const getConfig = require('hjs-webpack');


var config = getConfig({
    isDev: isDev,
    in: join(src, 'app.js'),
    out: dest,
    html: function(context) {
        context.title = "Kelp Clone"
        return {
            'index.html': context.defaultTemplate(),
        }
    },
    clearBeforeBuild: true
})

// CSS modules - Modify th existing CSS loader to use the CSS Modules config
// When the CSS filename matches "module\.css$"

//console.log("PRE", config.module.loaders)

const findLoader = (loaders, match) => {
    const found = loaders.filter(l => l && l.loader && l.loader.match(match))
    return found ? found[0] : null;
}

// Use codes in production othewiser readable path / name / local for development
const cssModuleStyleNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

// Find and Modify existing css loader
const cssloader = findLoader(config.module.loaders, matchCssLoaders);
//cssloader.test = new RegExp(`\.module${cssloader.test.source}`)
cssloader.include = [src]
cssloader.loader = cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModuleStyleNames}$3`)

// Add a plain CSS loader for CSS within node_modules
config.module.loaders.push({
    test: /\.css$/,
    include: [node_modules_path],
    loader: 'style!css'
})

// CSS modules

// postcss
config.postcss = [].concat([
    require('precss')({}),
    require('autoprefixer')({}),
])

// if (isProduction) {
//     config.postcss = [].concat([
//         require('cssnano')({})
//     ])
// }

// END postcss


// Find and Replace __PLACEHOLDERS__ in the code
// defines come from dotenv
config.plugins = [
    new webpack.DefinePlugin(defines)
].concat(config.plugins);


// Require paths and aliases
config.resolve.root = [src, node_modules_path]
config.resolve.alias = {
    'css': join(src, 'styles'),
    'containers': join(src, 'containers'),
    'components': join(src, 'components'),
    'views': join(src, 'views'),
    'utils': join(src, 'utils')
}

if (isTest) {
    // What would this this do?
    config.externals = {
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true
    }
}

module.exports = config;

