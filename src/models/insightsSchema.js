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
    },
    mediaLinks:{
        type:Array,
        
    }
})

module.exports = mongoose.model('domain',domainSchema)