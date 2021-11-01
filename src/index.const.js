const PORT = 1883
const SERVER = 'mqtt://localhost'
const TOPICS = {
  MAIN: 'main',
  KITCHEN: 'kitchen',
  TV: 'tv',
  OVEN: 'oven',
  'home/bedroom/fan': 'home/bedroom/fan',
}

module.exports = { PORT, SERVER, TOPICS }
