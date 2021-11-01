const { PORT, TOPICS } = require('./src/index.const')
const { log, authenticate } = require('./src/index.util')

var aedes = require('aedes')()
var server = require('net').createServer(aedes.handle)

// client connection event:
aedes.on('client', (client) => {
  log('Client CONNECTED:', `id = ${client.id}`, 'success')

  aedes.publish({
    cmd: 'publish',
    qos: 2,
    topic: TOPICS.MAIN,
    payload: `Client CONNECTED: id = ${client.id}`,
    retain: false,
  })
})

//client disconnection event:
aedes.on('clientDisconnect', (client) => {
  log('Client DISCONNECTED:', `id = ${client.id}`, 'error')

  aedes.publish({
    cmd: 'publish',
    qos: 2,
    topic: TOPICS.MAIN,
    payload: `Client DISCONNECTED: id = ${client.id}`,
    retain: false,
  })
})

aedes.authenticate = async (client, username, password, callback) => {
  try {
    const authenticated = await authenticate(username, password, client)

    return callback(null, authenticated)
  } catch (e) {
    log('Authentication failed', `${e}`, 'error')

    return callback(e, false)
  }
}

server.listen(PORT, function () {
  log('Server listening on port', `${PORT}`, 'info')
})
