import http from 'http'
import logger from "./logger.js";

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const routeKey = `${method} ${url}`;


    switch (routeKey) {
        case 'GET /':
            logger.info('Get request to home')
            res.end("Welcome to Home page")
            break;

        case 'GET /about':
            logger.info('Get request to About')
            res.end("Welcome to About page")
            break;

        case 'GET /contact':
            logger.info('Get request to Contact')
            res.end("Welcome to Contact page")
            break;

        default:
            logger.warn(`invalid route`)
            res.writeHead(404, { 'Content-type': 'text/plain' })
            res.end('404 not found')
            break;
    }
})
server.listen(3000, () => {
    console.log('server is running at local host 3000');

})