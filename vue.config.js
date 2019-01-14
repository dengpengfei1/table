module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      "/queryLog": {
        target: "https://www.muunet.com",
        secure: false,
        changeOrigin: true
      }
    }
  }
}