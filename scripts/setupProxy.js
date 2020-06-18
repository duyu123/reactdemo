const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://rest.apizza.net/mock/41035ff55953552118fa8b28e7f4c121',
      changeOrigin: true
    })
  )
}