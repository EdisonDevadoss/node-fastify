//Sometimes you need to maintain two or more different versions of 
//the same api, a classic approch is to prefix all the routes with the api
// version number, /v1/user for example.

//routes/v1/user.js

module.exports = function(fastify, opts, next){
    fastify.get('/user', (req, reply)=>{
      reply.send({hello: 'hello'})
    })
    next()
}