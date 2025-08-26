import winston from "winston";

test("create new logger with console & file transport", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                level: "error",
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.ms(),
                    winston.format.simple()),
                filename: "application-error.log"
            }),
        ]
    });

    logger.info("Hello World");
    logger.info("Hello World");
    logger.info("Hello World");
    logger.info("Hello World");
    logger.error("Hello Error");
    logger.error("Hello Error");
    logger.error("Hello Error");
});