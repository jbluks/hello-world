const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Goodbye World')
})

app.listen(port, () => {
  console.log('listening on', port)
})