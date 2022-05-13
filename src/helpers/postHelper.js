const DomainCollection= require('../models/domainSchema')


module.exports ={
    postFetch:()=>{
        return new Promise((resolve,reject)=>{
            DomainCollection.find({}).then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    postCreate:(data)=>{
        return new Promise((resolve,reject)=>{
            const newData = new DomainCollection({
                url:data.url,
                wordCount: data.url.length,
            })

            newData.save().then((result)=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    postFavorite:(id)=>{
        return new Promise(async(resolve,reject)=>{
            const post = await DomainCollection.findOne({_id:id}) 
            if(post){
                DomainCollection.updateOne({_id:id},{favorite:!post.favorite}).then((result)=>{
                    resolve(true)
                }).catch((err)=>{
                    reject(err)
                })
            }else{
                reject("Post not found")
            }
        })
    },

    postDelete:(id)=>{
        return new Promise((resolve,reject)=>{
            DomainCollection.deleteOne({_id:id}).then(()=>{
                resolve(true)
            }).catch(err=>{
                reject(err)
            })
        })
    }


}