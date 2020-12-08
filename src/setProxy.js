const { proxy } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/content', {
            target:'http://localhost:4000/',
            changeOrigin:true,
            secure:false
        })
    );
    app.use(
        proxy('/login', {
            target:'http://localhost:4000/',
            changeOrigin:true
        })
    );
};