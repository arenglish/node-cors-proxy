// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;
const cors_proxy = require('cors-anywhere');

const proxy = (_port = port, _host = host) => {
    return cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2']
    }).listen(_port, _host, function() {
        console.log('Running CORS Anywhere on ' + _host + ':' + _port);
    });
}

module.exports = proxy;
