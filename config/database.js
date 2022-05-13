const mongoose = require('mongoose')
module.exports={
    dbConnect :(url)=>{
        mongoose.connect(url).then(()=>{
            console.log('data base connected successfully')
        }).catch((err)=>{
            console.log(err)
        })
    }
}