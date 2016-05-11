/**
 * Partial function with bind
 */


function loggingBind(namespace) {

    return console.log.bind(console, namespace)


}

module.exports = loggingBind