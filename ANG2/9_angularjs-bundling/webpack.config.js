var path = require('path'), webpack = require('webpack'), ExtractTextPlugin = require('extract-text-webpack-plugin'),
    fontFileLoader = 'file?name=font/[name]-[hash].[ext]';

module.exports = {
    context: __dirname,
    entry: {
        vendor: './vendor/index',
        app: './src/app'
    },
    output: {
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src')},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css')},
            {test: /\.woff$/, loader: fontFileLoader},
            {test: /\.woff2$/, loader: fontFileLoader},
            {test: /\.ttf$/, loader: fontFileLoader},
            {test: /\.eot$/, loader: fontFileLoader},
            {test: /\.svg$/, loader: fontFileLoader}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin('app.css')
    ]
};
