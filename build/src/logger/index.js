"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const winston_1 = __importDefault(require("winston"));
const config_1 = __importDefault(require("../config"));
exports.loggingMiddleware = morgan_1.default(':date[web] [IP :req[X-Forwarded-For]] :method :url :status :response-time[3]ms');
exports.logger = winston_1.default.createLogger({
    level: config_1.default.logging.level,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
        }),
    ],
});
//# sourceMappingURL=index.js.map