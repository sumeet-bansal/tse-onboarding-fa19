import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';

import mongoose from 'mongoose';
import { UserController } from './controllers';
import { logger as log, middleware as loggingMiddleware } from './logger';

// windows will need `docker-machine ip` not localhost
mongoose.connect('mongodb://localhost:27017/chatrooms', { useNewUrlParser: true });

const app = createExpressServer({
  controllers: [UserController],
});

app.use(loggingMiddleware);

app.listen(3000);
log.info('started 3000');
