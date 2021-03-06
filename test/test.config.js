module.exports = {
  server: {
    port: 1734
  },
  baseApiRoute: '/api',
  appSecrets: ['chat.super.secret.no.key'],
  session: {
    key: 'test:session',
    maxAge: 24 * 60 * 60 * 1000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
  },
  usernameMaxLength: 25,
  mongo: {
    url: 'mongodb://localhost:27017',
    db: 'test-chat'
  }
}
