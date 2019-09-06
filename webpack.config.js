const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  "output": {
    "filename": "[name].pack.js"
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  },
  "entry": {
    "index": "./index"
  },
  "plugins": [
    new BrowserSyncPlugin({
    // browse to http://localhost:8080/ during development,
    // ./src directory is being served
    host: 'localhost',
    port: 8080,
    files: ['./index.js', './App.js', './components/*.js'],
    server: { baseDir: ['.'] }
    })
]
};