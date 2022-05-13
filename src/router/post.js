const express = require('express')
const router = express.Router()
const {getInsights,postInsights,favInsights,deleteInsights}= require('../controllers/postController')
router.get('/get/insights',getInsights);
router.post('/create/insights',postInsights);
router.put('/update/insights/:id',favInsights);
router.delete('/remove/insights/:id',deleteInsights);

module.exports = router