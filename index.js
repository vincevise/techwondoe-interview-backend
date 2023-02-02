const jsonServer = require('json-server')
const cors = require('cors')

const server = jsonServer.create()
const router = jsonServer.router( 'db.json')
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use('/api',(req,res)=>{
  try{
    res.status(200).json({data:'hogaya'})
  }catch(error){
    res.status(400).json(error.message)
  }
})
server.use(router)

const PORT = 3026

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
