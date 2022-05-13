
const postHelper = require("../helpers/postHelper")


const getInsights=(req,res)=>{
   
    postHelper.postFetch().then((respone)=>{
        res.json(respone)
    }).cath((err)=>{
        res.json(err)
    })

}


const postInsights= (req,res)=>{
    if(!req.body.title){
        res.status(400).json()
    }else{
        postHelper.postCreate(req.body).then((respone)=>{
            res.json(respone)
        }).cath((err)=>{
            res.json(err)
        })
    }
}

const favInsights=(req,res)=>{
   
    postHelper.postFavorite(req.params.id).then((respone)=>{
        res.json(respone)
    }).cath((err)=>{
        res.json(err)
    })

}

const deleteInsights=(req,res)=>{
   
    postHelper.postDelete(req.params.id).then((respone)=>{
        res.json(respone)
    }).cath((err)=>{
        res.json(err)
    })
}

module.exports={getInsights,postInsights,favInsights,deleteInsights}
