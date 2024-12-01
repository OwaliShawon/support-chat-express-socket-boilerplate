const { createLogger, format, transports } = require("winston");
const { retrieveRequestId } = require("../../middleware/request-context");
require("winston-daily-rotate-file");

const LOG_DIR = "logs";

const configureLogger = () => {
  return createLogger({
    level: "info",
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.json(),
      format((info) => {
        const requestId = retrieveRequestId();
        if (requestId) {
          info.requestId = requestId;
        }
        return info;
      })()
    ),
    transports: [
      new transports.File({
        filename: `${LOG_DIR}/error.log`,
        level: "error",
      }),
      new transports.File({ filename: `${LOG_DIR}/combined.log` }),
      new transports.DailyRotateFile({
        level: "info",
        filename: `${LOG_DIR}/application-%DATE%.log`,
        datePattern: "YYYY-MM-DD-HH",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
      }),
    ],
  });
};

const LogManager = (() => {
  let instance;

  return {
    getInstance: () => {
      if (!instance) {
        instance = configureLogger();
        if (process.env.NODE_ENV !== "production") {
          instance.add(
            new transports.Console({
              format: format.combine(format.colorize(), format.simple()),
            })
          );
        }
      }
      return instance;
    },
  };
})();

module.exports = LogManager.getInstance();
