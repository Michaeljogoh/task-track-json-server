// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')

const server = jsonServer.create()



// Comment out to allow write operations
const router = jsonServer.router('task.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}))
server.use(router)
server.listen(3003, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server