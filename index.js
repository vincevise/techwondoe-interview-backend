const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router( 'db.json')
console.log(__dirname)
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 3023

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT,__dirname}`)
})
