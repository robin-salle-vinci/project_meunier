require('dotenv-flow').config()

const PORT = process.env.PORT

if ((PORT||0) === 0) {
  throw new Error('Missing or empty "PORT" environement variable!');
}

module.exports = {
  PORT
}