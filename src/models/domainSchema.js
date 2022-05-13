const mongoose = require('mongoose')

const domainSchema = new mongoose.Schema({
    url:{
        type:String,
    },
    wordCount:{
        type:Number
    },
    favorite:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('domain',domainSchema)