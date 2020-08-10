const Pepple = require('./pepple')
const errorsHandler= require('../common/erroHandler')

Pepple.methods(['get','post','put','delete'])
Pepple.updateOptions({new:true, runValidators: true})
Pepple.after('post',errorsHandler).after('put',errorsHandler)


module.exports = Pepple