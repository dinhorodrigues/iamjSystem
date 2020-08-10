const express = require('express')
const auth = require('./auth')

module.exports = function (app) {

    //Rotas  protegidas por token

    const protectedApi = express.Router()
    const router = express.Router()
    app.use('/api', protectedApi)
    app.use('/test', router)
   
   
///// api protegida por token
    protectedApi.use(auth)

    const BillingCycle = require('../api/billingCycle/billingCycleServer');
    BillingCycle.register(protectedApi, '/billingCycles')

    
    const Pepple = require('../api/pepple/peppleServer')
    Pepple.register(protectedApi,'/pepple')

    const Visitors = require('../api/visitors/visitorServer')
    Visitors.register(protectedApi,'/visitors')


    //// Rotas Abertas 
    const openApi = express.Router()
    app.use('/oapi', openApi)
    
   
    const authService = require('../api/user/authService')
    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validateToken'), authService.validateToken

}