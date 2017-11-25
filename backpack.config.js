module.exports = {
  webpack: (config) => { // (config, options, webpack)
    config.entry.main = './server/index.js' // eslint-disable-line no-param-reassign
    return config
  },
}
