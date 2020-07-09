const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://yapi.lanhanba.com:3000/mock/36',
      changeOrigin: true,
      pathRewrite: {
        '^/api' : '/api',     // rewrite path 
      }
    })
  )
}