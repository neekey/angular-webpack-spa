var path = require('path');
var fs = require( 'fs' );
var ENV = process.env.NODE_DEV;
var webpack = require( 'webpack' );
require( './route-builder' );
var nodeModules = path.resolve(__dirname, '../node_modules');

var bourbon = require( 'bourbon' );
var bourbonNeat = require( 'bourbon-neat' );
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');
var pathToUIRouterExtra = path.resolve( nodeModules, 'ui-router-extras/release/modular/' );

var BUILD_DIR = path.resolve( __dirname, '../build' );
var PLUGINS = [];
var PAGE_ENTRIES = {
    'app': path.resolve(__dirname, '../app/app.js'),
    'vender': [
        'jQuery',
        'lodash',
        'angular',
        'angular-resource',
        'angular-ui-router',
        'ui-router-extras'
    ]
};

if( ENV == 'development' ){
    PAGE_ENTRIES[ 'webpack-dev-server' ] = 'webpack/hot/dev-server';
}

PLUGINS.push( new webpack.optimize.CommonsChunkPlugin( 'vender', 'vender.js' ) );

if( ENV == 'production' ){
    PLUGINS.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
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
            //'angular': pathToAngular
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
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ng-annotate!babel?presets=es2015' // 'babel-loader' is also a legal name to reference
            }
        ]
    },
    plugins: PLUGINS,
    sassLoader: {
        includePaths: [ bourbon.includePaths, bourbonNeat.includePaths ]
    },

    imageWebpackLoader: {
        pngquant:{
            quality: "65-90",
            speed: 4
        }
    }
};