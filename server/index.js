// import http from 'http';
// import app from './server';
// import config from './config/index';
const http = require('http');
const app = require('./server');
const config = require('./config/index');

const server = http.createServer(app);
// let currentApp = app;

const { port } = config;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// if (module.hot) {
//     module.hot.accept(['./server'], () => {
//         server.removeListener('request', currentApp);
//         server.on('request', app);
//         currentApp = app;
//     });
// }
