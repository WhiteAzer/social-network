import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackBuilder } from '../types';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

const pluginsBuilder: WebpackBuilder<webpack.WebpackPluginInstance[]> = (options) => {
    return [
        new HtmlWebpackPlugin({
            template: path.join(options.paths.extra.html, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: options.isDev ? 'styles.[contenthash].css' : 'styles.css',
        }),
        new ESLintWebpackPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new webpack.ProgressPlugin(),
    ];
};

export default pluginsBuilder;
