const { SERVER, TOPICS } = require('./src/index.const')
const { log } = require('./src/index.util')

const mqtt = require('mqtt')
const client = mqtt.connect(SERVER)

// on connection event:
client.on(
    'connect',
    () => {
        log('Connected to server', SERVER, 'info')
        TOPICS.forEach(TOPIC => {
            client.subscribe(TOPIC)
            client.publish(TOPIC, 'Hi there!')
        });
    }
)

// on message received event:
client.on(
    'message',
    (topic, message) => {
        log(`[${topic.toLocaleUpperCase()}] - msg received on topic:`, `${message.toString()}`, 'info')
    }
)
