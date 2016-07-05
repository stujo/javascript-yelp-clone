From

* [https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp](https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/#setup)

Make the Folders

    $ mkdir -p src/{components,containers,styles,utils,views}

Create the webpack script

    $ touch webpack.config.js

Setup Git

    $ git init
    $ git remote add origin ....
    $ echo "node_modules" >> .gitignore

NPM

    $ npm init -y

Setup Babel

    $ npm install --save-dev babel-core babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-preset-stage-0

    $ touch .babelrc

    {
      "presets": ["es2015", "stage-0", "react"],
      "env": {
        "development": {
          "presets": ["react-hmre"]
        },
        "production": {
          "presets": []
        },
        "test": {
          "presets": []
        }
      }
    }

Use webpack 

    $ npm install --save-dev hjs-webpack webpack
    $ npm install --save-dev babel-loader css-loader style-loader postcss-loader url-loader file-loader

Edit ``webpack.config.js`` to use hjs-webpack for base config

Use React

    $ npm install --save react react-dom
    $ npm install --save react-router

Write the ``src/app.js``

    $ touch src/app.js

    import React from 'react'
    import ReactDOM from 'react-dom'
    const App = React.createClass({
      render: function() {
        return (<div>Text text text</div>)
      }
    });
    const mountNode = document.querySelector('#root');
    ReactDOM.render(<App />, mountNode);


Start Dev Server

    $ NODE_ENV=development ./node_modules/.bin/hjs-dev-server

Added to ``package.json``

    "scripts": {
       "start": "NODE_ENV=development ./node_modules/.bin/hjs-dev-server",
       "test": "echo \"Error: no test specified\" && exit 1"
     },

This works because the hjs-dev-server has default ``index.html`` file with a ``#root`` element

Setup PostCSS

What is PostCSS? -  A JavaScript based CSS transformation pipeline [https://github.com/postcss/postcss](https://github.com/postcss/postcss)

    $ npm install --save-dev autoprefixer


