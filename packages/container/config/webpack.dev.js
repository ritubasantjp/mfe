const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge'); // Importing merge function from webpack-merge used combine together two different webpack configurations objects. 
// so it combine configuration from common.webpack.js file and merge into dev configuration.
const HTMLWebpackPlugin = require('html-webpack-plugin'); // Importing HTMLWebpackPlugin to generate an HTML file that includes the webpack bundles.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Importing ModuleFederationPlugin for micro-frontend architecture.
const packageJson = require('../package.json'); // Importing package.json to access the version and name of the application.

const devConfig = {
    mode: 'development', // Setting the mode to development for better debugging and development experience.
    devServer: { // Configuration for the development server.
        port: 8080, // Setting the port for the development server to 8081.
        historyApiFallback: { // Enabling history API fallback to serve the index.html file for all 404 responses.
            index: 'index.html' // Fallback to index.html for single-page applications (SPA) to handle client-side routing.
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', // Name of the micro-frontend application.
            remotes: { // Configuring remote modules that this container application will consume.
                marketing: 'marketing@http://localhost:8081/remoteEntry.js', // Configuring the remote module for marketing application.
            },
            shared: packageJson.dependencies // Sharing dependencies with the remote modules to avoid duplication.  
        }),
        new HTMLWebpackPlugin({ // Creating a new instance of HTMLWebpackPlugin to generate an HTML file.
            template: './public/index.html', // Specifying the template HTML file to use.
        })
    ] // Array of plugins to enhance the webpack build process.

};
module.exports = merge(commonConfig, devConfig); // Merging the common configuration with the development-specific configuration using the merge function. 
// devConfig at second place means dev config will override common config if there is any conflict.