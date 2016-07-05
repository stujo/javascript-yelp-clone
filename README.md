From

* [https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp](https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/#setup)


    $ mkdir -p src/{components,containers,styles,utils,views} \
     && touch webpack.config.js

    $ git init
    $ git remote add origin ....

    $ echo "node_modules" >> .gitignore

    $ npm init -y

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

    touch src/app.js


    import React from 'react'
    import ReactDOM from 'react-dom'
    const App = React.createClass({
      render: function() {
        return (<div>Text text text</div>)
      }
    });
    const mountNode = document.querySelector('#root');
    ReactDOM.render(<App />, mountNode);

