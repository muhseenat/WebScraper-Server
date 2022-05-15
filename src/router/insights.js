const express = require('express')
const router = express.Router()

const { getInsights, postInsights, 
    favInsights, deleteInsights } = require('../controllers/postController')


router.get('/get', getInsights);
router.post('/create', postInsights);
router.put('/update/:id', favInsights);
router.delete('/delete/:id', deleteInsights);

module.exports = router