const path = require('path')
module.exports = {
  type: 'react',
  webpack: {
    entries: "src/entry.js",
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js"
    }
  }
}
