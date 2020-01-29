const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/money', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' e obrigatorio."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' Informado eh menor que o limite minimo de '{MIN}'"
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' Informado eh maior que o limite maximo de '{MAX}'"
mongoose.Error.messages.String.enum =
    "'{VALUE} não eh valido para o atributo '{PATH}'"
    
