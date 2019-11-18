module.exports.swaggerOptions = {
    swaggerDefinition : {
        swagger: '2.0',
        info : {
            title : "nflPickEm API",
            description : "PickEm game API information",
            contact : {
                name : 'Nick Chlam',
                email : 'chlam2003@gmail.com'
            },
            servers: ['http://localhost:3001']
        }
    },
    // where are the api's
    apis: ['./routes/*.js'],
    basePath: '/'
}