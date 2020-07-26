const express = require('express')
const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/*.appcache', (req, res) => {
  res.set('Content-Type', 'text/cache-manifest')
  res.sendFile(__dirname + req.url)
})

app.listen(3000, () => {
  console.log('server is already running on port 3000.')
})