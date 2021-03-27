const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const GitRevisionPlugin = require('git-revision-webpack-plugin');

const git = new GitRevisionPlugin({ branch: true });



const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.join(SRC_DIR, 'index'),
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/',
        path: BUILD_DIR,
    },
    devServer: {
        contentBase: BUILD_DIR,
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        historyApiFallback: true,
        port: 4040,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: [
            {
                context: "/api/v1",
                target: "http://[::1]:9112"
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // disable type checker - we will use it in fork plugin
                            transpileOnly: true
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'],
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                type: "asset/resource",
                generator: {
                    filename: "[path][name].[ext]",
                },
            },
            {
                type: "/.(woff|woff2|ttf|eot)$/",
                mimetype: "application/font-woff",
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset/resource",
                generator: {
                    filename: "[path][name].[ext]",
                },
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset/resource",
                generator: {
                    filename: "[path][name].[ext]",
                },
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "[path][name][ext]",
                },
            },
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.scss', '.css'],
        modules: [SRC_DIR, 'node_modules'],
        alias: {
            images: path.resolve(__dirname, 'public/images'),
        },
    },
    optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx}',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Client Dashboard',
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(SRC_DIR, "assets/fonts"),
                    to: path.join('public', "assets/fonts"),
                },
            ],
        }),
    ],
};
