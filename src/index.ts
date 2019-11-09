import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';

import { UserController } from './controllers';
import { logger as log, middleware as loggingMiddleware } from './logger';

const app = createExpressServer({
  controllers: [UserController],
});

app.use(loggingMiddleware);

app.listen(3000);
log.info('started 3000');
