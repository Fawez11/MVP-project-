const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')
const Schema = mongoose.Schema

let StudentMange = new Schema ({
    studentDescripe :{
        type : String
    },
    studentNote : {
        type: Number
    }
})

module.exports = mongoose.model('StudentMange',StudentMange)