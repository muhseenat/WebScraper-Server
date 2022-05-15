const request = require('request')
const cheerio = require('cheerio')
const postHelper = require("../helpers/postHelper")


//THIS IS FOR SCRAPPING THE WEBSITE DATA
const scrapData = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, html) => {

            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html)
                const wordCount = $('body').text().trim().length
                const imageUrl = []
                const webLink = []
                $("img").each((index, imageElement) => {
                    const imgUrl = $(imageElement).attr("src");
                    imageUrl.push(imgUrl)
                });
                $("a").each((index, webElement) => {
                    const link = $(webElement).attr("href");
                    webLink.push(link)
                });
                resolve({ wordCount, mediaLinks: imageUrl,webLink:webLink })
            } else {
                reject(error.code)
            }
        })
    })
}






//GET INSIGHTS CONTROLLER
const getInsights = (req, res) => {
    postHelper.postFetch().then((respone) => {
        res.json(respone)
    }).catch((err) => {
        res.json(err)
    })

}

//POST INSIGHTS CONTROLLER
const postInsights = (req, res) => {
    const { url } = req.body
    if (!url) {
        res.status(400).json()
    } else {
        scrapData(url).then((result) => {
            postHelper.postCreate({ ...result, url }).then((respone) => {
                res.json(respone)
            }).catch((err) => {
                res.json(err)
            })
        }).catch(err => res.status(404).json(err))

    }
}

//UPDATE FAVINSIGHTS CONTROLLER
const favInsights = (req, res) => {
    postHelper.postFavorite(req.params.id).then((respone) => {
        res.json(respone)
    }).catch((err) => {
        res.json(err)
    })

}

//DELETE INSIGHTS CONTROLLER
const deleteInsights = (req, res) => {
    postHelper.postDelete(req.params.id).then((respone) => {
        res.json(respone)
    }).catch((err) => {
        res.json(err)
    })
}

module.exports = { getInsights, postInsights, favInsights, deleteInsights }
