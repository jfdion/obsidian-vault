const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'ObsidianExtender',
      fileName: (format) => `ObsidianExtender.${format}.js`
    }
  }
});