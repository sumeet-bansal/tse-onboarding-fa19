"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const controllers_1 = require("./controllers");
const logger_1 = require("./logger");
const app = routing_controllers_1.createExpressServer({
    controllers: [controllers_1.UserController],
});
// app.use(loggingMiddleware);
app.listen(3000);
logger_1.logger.info('started 3000');
//# sourceMappingURL=index.js.map