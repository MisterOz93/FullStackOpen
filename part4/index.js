const app = require('./app')
const logger = require('./utils/logger')
const http = require('http')
const server = http.createServer(app);
