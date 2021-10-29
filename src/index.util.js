// helper function to log date+text to console:
const log = (message, submessage, type) => {
    const date = new Date().toLocaleString()

    if (type === 'info') console.log('\x1b[36m%s\x1b[33m%s\x1b[0m', `[${date}] -- `, message, submessage)
    if (type === 'success') console.log('\x1b[36m%s\x1b[37m\x1b[42m%s\x1b[0m', `[${date}] -- `, message, submessage)
    if (type === 'error') console.log('\x1b[36m%s\x1b[37m\x1b[41m%s\x1b[0m', `[${date}] -- `, message, submessage)
}

module.exports = { log }
