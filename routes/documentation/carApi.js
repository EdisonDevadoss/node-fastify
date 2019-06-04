exports.addCarSchema = {
    description:'Create a new user',
    tags:['cars'],
    summary: 'Create a new car with given values',
    body:{
        type:'object',
        properties:{
            title:{type: 'string'},
            brand:{type: 'string'},
            price:{type: 'string'},
            age:{type: 'number'},
            services:{type:'object'}
        }
    },
    response:{
        200:{
            description: 'Successful response',
            type: 'object',
            properties: {
              _id: { type: 'string' },
              title: { type: 'string' },
              brand: { type: 'string' },
              price: { type: 'string' },
              age: { type: 'number' },
              services: { type: 'object' },
              __v: { type: 'number' }
            }
          }
        }
    }
