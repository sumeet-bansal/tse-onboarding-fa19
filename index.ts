import express from 'express';
import morgan from 'morgan';

import { logger as log } from './app/logger';

const app = require('./app');

const server = express();

// enable logging
server.use(morgan(':date[web] [IP :req[X-Forwarded-For]] :method :url :status :response-time[3]ms'));

// parse urlencoded and JSON POST data
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// route the API
server.use('/api/', app.api.router);

// register error middleware
server.use(app.error.errorHandler);
server.use(app.error.notFoundHandler);

// start the server
server.listen(app.config.port, () => {
  log.info('Started server on port %d.', app.config.port);
});
