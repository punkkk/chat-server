const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const session = require('koa-session')
const http = require('http')

const Socket = require('./socket')
const logger = require('./helpers/logger')
const loggerMiddleware = require('./middleware/logger')(logger)
const router = require('./routes/index')
const testing = process.env.NODE_ENV === 'test'

class Server {
  constructor (config = {}) {
    this.config = {
      appSecrets: config.appSecrets,
      server: config.serverConfig,
      session: config.sessionConfig
    }

    this.server = null
    this.socket = null
  }

  /**
   * Start server, and middlewares etc
   *
   * @param {Api} api database api
   * @return {Promise<void>}
   */
  async start (api) {
    const app = new Koa()
    app.keys = this.config.appSecrets

    app.api = api

    app.use(loggerMiddleware)
    app.use(session(this.config.session, app))
    app.use(BodyParser())
    app.use(router.routes())

    this.server = http.Server(app.callback())

    this.socket = new Socket(this.server, app)
    this.socket.setLogger(logger)
    app.socket = this.socket

    this.server.listen(this.config.server.port, () => {
      if (!testing) {
        logger.info(`server listening on port: ${this.config.server.port}`)
      }
    })
  }

  getServer () {
    return this.server
  }
}

module.exports = Server
