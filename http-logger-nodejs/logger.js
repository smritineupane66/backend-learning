import winston from "winston"
const { combine, timestamp, json, colorize, simple } = winston.format;

const infoFilter = winston.format((info) => {
    return info.level === 'info' ? info : false;
});

const warnFilter = winston.format((info) => {
    return info.level === 'warn' ? info : false;
});

const errorFilter = winston.format((info) => {
    return info.level === 'error' ? info : false;
});
const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({
            filename: "logs/info.log",
            level: "info",
            format: combine(infoFilter(), timestamp(), json()),
        }),


        new winston.transports.File({
            filename: 'logs/warn.log',
            level: 'warn',
            format: combine(warnFilter(), timestamp(), json()),

        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: combine(errorFilter(), timestamp(), json()),


        }),
        new winston.transports.Console({
            format: combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })

    ]
});


export default logger;
