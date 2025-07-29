module.exports = { // module.exports is used to export the configuration object so that it can be imported in other files
    module: { // module is used to define how different types of modules within the project should be treated
        rules: [ // rules is an array of objects, each object defines a rule for how to handle a specific type of file
            {
                test: /\.m?jsx?$/, // it make babel aware that if there is any file with .js or .mjs extension, it should be processed by babel-loader
                exclude: /node_modules/, // exclude node_modules directory
                use: { // use is used to specify which loader should be used to process the files
                    loader: 'babel-loader', // use babel-loader to process the files
                    options: { // options is used to specify options for the loader
                        presets: ['@babel/preset-react', '@babel/preset-env'], // to setup different features in browser like JSX, ES6, etc.
                        plugins: ['@babel/plugin-transform-runtime'] // to setup different feature in browser like async/await, etc.
                    }
                }
            }
        ]
    }
}