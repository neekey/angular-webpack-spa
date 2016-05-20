var path = require('path');
var fs = require( 'fs' );
var ENV = process.env.NODE_DEV;
var webpack = require( 'webpack' );
var nodeModules = path.resolve(__dirname, '../node_modules');

var bourbon = require( 'bourbon' );
var bourbonNeat = require( 'bourbon-neat' );
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');
var pathToUIRouterExtra = path.resolve( nodeModules, 'ui-router-extras/release/modular/' );

var BUILD_DIR = path.resolve( __dirname, '../build' );
var PLUGINS = [];
var PAGE_ENTRIES = {
    'app': path.resolve(__dirname, '../app/app.js')
};

if( ENV == 'development' ){
    PAGE_ENTRIES[ 'webpack-dev-server' ] = 'webpack/hot/dev-server';
}

//PLUGINS.push( new webpack.optimize.CommonsChunkPlugin( 'common.js' ) );

if( ENV == 'production' ){
    PLUGINS.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
        },
        output: {
            comments: false
        }
    }));
}

module.exports = {
    entry: PAGE_ENTRIES,
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            //'ui-router-extras': pathToUIRouterExtra
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.html$/,
                //loader: 'ngtemplate?module=app&relativeTo=' + path.resolve( __dirname, '../app/pages' ) + '!html'
                loader: 'html'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    // this enables ES6 syntax
                    presets: ['es2015']
                }
            }
        ],
        //noParse: [ pathToAngular ]
    },
    plugins: PLUGINS,
    //externals: {
    //    'angular': 'angular'
    //},
    sassLoader: {
        includePaths: [ bourbon.includePaths, bourbonNeat.includePaths ]
    }
};