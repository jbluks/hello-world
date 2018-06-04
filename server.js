const express = require('express')
const app = express()
const port = process.env.port || 8080

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log('listening on', port)
})