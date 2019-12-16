const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api',{
        target: 'http://yapi.demo.qunar.com/mock/57288',
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))
}