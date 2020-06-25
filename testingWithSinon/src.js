const add = (a,b) => a+b

const greet = name => {
    const now = new Date();
    const message = `Hi ${name}!! The time is: ${now.toDateString()}`
    return message
}

module.exports = {add, greet}