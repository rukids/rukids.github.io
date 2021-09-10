const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        css: path.resolve(__dirname, './assets/index.css'),
        js: path.resolve(__dirname, './assets/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: isProduction ? '[name].[fullhash].js' : '[name].js',
        chunkFilename: isProduction ? '[id].[fullhash].js' : '[id].js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'postcss-loader',
            ]
        },
        {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8000,
                  name: '[fullhash].[ext]',
                }
              }
            ]
          }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[fullhash].css' : '[name].css'
        }),
        new WebpackManifestPlugin({
            fileName: '../_data/manifest.yml',
            publicPath: './dist/',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve('assets/imgs'),
                to: 'imgs/',
            }]
        }),
    ],
};