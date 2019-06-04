// Require the framework and instantiate it
const log = require('pino')({ level: 'info' })
const fastify = require('fastify')({
    logger: log
});

log.info('does not have request information')

//Require the external modules
const mongoose = require('mongoose');

//Import Routes
const routes = require('./routes');

//Import Swagger
const swagger = require('./config/swagger');

//Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);


//Connect to DB
mongoose.connect('mongodb://localhost/mycargarage').then(()=>{
  console.log('MonogoDB Connected...')
}).catch((error)=>{
  console.log('error is', error);
})

//Loop over each route
routes.forEach((route, index)=> {
    fastify.route(route);
})

//Declare a route
const opts = require('./routes/shortHand');


fastify.get('/', { logLevel: 'warn' }, (req, reply)=>{
    req.log.info('Some info about the current request')
    reply.send({hello: 'hello world'})
})


function handler (req, reply){
    reply.send(reply.context.config.output)
}

fastify.get('/en', {config: {output: 'hanlder function works'}}, handler);
fastify.get('/in', {config: {output: 'indis function works'}}, handler);

// fastify.register(function(instance, options, next){
//     instance.get('/hello', opts, (req, reply)=>{
//         reply.send({hello: 'hello'})
//     })
//     next()
// }, {prefix: '/english'});

fastify.register(require('./routes/v1/user'), {
    prefix: '/v1',
  })
  

 //URL building
 //To register a parametric path, use the colon before the parameter name. 
 //For wildcard use the star. 
 //Remember that static routes are always checked before parametric and wildcard. 

 // wildcard
fastify.get('/example/*', (request, reply) => {
    reply.send({hello: 'wilcard'})
})

// Run the server!

const start = async ()=>{
    try {
        await fastify.listen(3000, '0.0.0.0')
        fastify.swagger()
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch(err){
        fastify.log.error(err);
        process.exit(1)
    }
}
start();
