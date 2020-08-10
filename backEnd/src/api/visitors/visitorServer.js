const Visitors = require('./visitors')
const errorsHandler = require('../common/erroHandler')


Visitors.methods(['get','post','put','delete'])
Visitors.updateOptions({new:true, runValidators: true})
Visitors.after('post',errorsHandler).after('put',errorsHandler)


module.exports = Visitors