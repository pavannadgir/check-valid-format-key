const checkValidKey = (msg={}, key='') => {
    if (typeof msg === 'object' && typeof msg.id !== 'undefined') return msg

    // do error reporting here.
    // if needed return a fallback message
    return {
        id: key,
        defaultMessage: key,
    }
}

module.exports = { checkValidKey }