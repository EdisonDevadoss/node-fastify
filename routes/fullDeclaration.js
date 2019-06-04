//There are two way to delcare routes. One is full declaration and another one is short declartion

//below code is example of full declaraton method.
//https://lmammino.github.io/fastify/docs/routes/

const fastify = require('fastify')({
    logger: true
});

exports.fullDeclartaion = fastify.route({
    method:'GET',
    url:'/',
    schema:{
        querystring:{
            name:{type: 'string'},
            excitement:{type:'integer'}
        },
        response:{
            200:{
                type:'object',
                properties:{
                    hello:{type:'string'}
                }
            }
        }
    },
    handler: function(req, reply){
        reply.send({
            hello: 'world'
        })
    }
})