// helper function to log date+text to console:
const log = (message, submessage, type) => {
    const date = new Date().toLocaleString()

    if (type === 'info') console.log('\x1b[36m%s\x1b[33m%s\x1b[0m', `[${date}] -- `, message, submessage)
    if (type === 'success') console.log('\x1b[36m%s\x1b[37m\x1b[42m%s\x1b[0m', `[${date}] -- `, message, submessage)
    if (type === 'error') console.log('\x1b[36m%s\x1b[37m\x1b[41m%s\x1b[0m', `[${date}] -- `, message, submessage)
}

const validateClient = id => {
    return id.startsWith('mqtt')
}

const authenticate = async (username, password, client) => {
    password = password && Buffer.from(password, 'base64').toString()
    const validCreds = username === 'username' && password === 'password'
    const validClient = validateClient(client.id)
    
    return validCreds || validClient
}

module.exports = { log, validateClient, authenticate }
