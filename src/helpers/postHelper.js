const ScapDataCollection= require('../models/insightsSchema')


module.exports ={
    //DATA FETCH HELPER
    postFetch:()=>{
        return new Promise((resolve,reject)=>{
            ScapDataCollection.find({}).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    },

    //DATA CREATE HELPER
    postCreate:(data)=>{
        return new Promise((resolve,reject)=>{
            const newData = new ScapDataCollection({
                url:data.url,
                wordCount: data.wordCount,
                mediaLinks:data.mediaLinks,
                webLinks:data.webLink
            })

            newData.save().then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    },

    //DATA UPDATE HELPER
    postFavorite:(id)=>{
        return new Promise(async(resolve,reject)=>{
            const post = await ScapDataCollection.findOne({_id:id}) 
            if(post){
                ScapDataCollection.updateOne({_id:id},{favorite:!post.favorite}).then((result)=>{
                    resolve(true)
                }).catch((err)=>{
                    reject(err)
                })
            }else{
                reject("Post not found")
            }
        })
    },
    //DATA DELETE HELPER
    postDelete:(id)=>{
        return new Promise((resolve,reject)=>{
            ScapDataCollection.deleteOne({_id:id}).then(()=>{
                resolve(true)
            }).catch(err=>{
                reject(err)
            })
        })
    }


}