//VOU IMPORTAR A FUNÇÃO E COLOCAR NA VARIAVEL GETFLAFS//
const getFlags = require('./flags')

console.log(`Oi ${getFlags('--name')}. ${getFlags('--greeting')}`)