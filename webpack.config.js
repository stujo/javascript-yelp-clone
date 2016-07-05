const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
    join = path.join,
    resolve = path.resolve;

// Get basic configuration from hjs-webpack

const getConfig = require('hjs-webpack');

const root = resolve(__dirname);
const src = join(root, 'src');
const node_modules_path = join(root, 'node_modules');
const dest = join(root, 'dist');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

var config = getConfig({
    isDev: isDev,
    in: join(src, 'app.js'),
    out: dest,
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
cssloader.test = new RegExp(`\.module${cssloader.test.source}`)
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
    require('cssnano')({})
])
// END postcss
module.exports = config;

