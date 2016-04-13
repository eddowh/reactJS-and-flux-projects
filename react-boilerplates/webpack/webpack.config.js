module.exports = {
    resolve: {
        modulesDirectories: ['node_modules'],
    },
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: __dirname,
        filename: 'public/js/main.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    }
}
