const winston = require('winston')

const production = process.env.NODE_ENV === 'production'
const testing = process.env.NODE_ENV === 'test'

const logger = winston.createLogger({
  level: production ? 'info' : (testing ? 'none' : 'debug'),
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'chat.log' })
  ]
})

if (!production) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  )
}

module.exports = logger
