const express = require('express')
const {errorHandler, disableCors} = require('./utils/middlewares')
const {PORT} = require('./utils/config')

// Create and init server
const app = express()

app.use(express.json())
app.use(disableCors)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
