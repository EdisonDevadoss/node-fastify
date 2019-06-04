//Short hand declaration of routes
//https://lmammino.github.io/fastify/docs/routes/

exports.opts = {
    schema:{
        response:{
            200:{
                type:'object',
                properties:{
                    hello:{type:'string'}
                }
            }
        }
    }
}