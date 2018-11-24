module.exports = {
  type: 'react-app',
  devServer: {
    compress: true,
    disableHostCheck: true
  },
  webpack: {
    publicPath: '' //Enable only for deploy
  }
};