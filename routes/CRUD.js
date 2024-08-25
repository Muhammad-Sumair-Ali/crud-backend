const express = require("express");
const router = express.Router()

const createData = require('../controllers/createData')
const gettingData = require('../controllers/getData')
const deleteData = require('../controllers/deleteData')
const updateData = require('../controllers/updateData')

router.post('/createData', createData)
router.get('/getData', gettingData.getData)
router.get('/getDataById/:id', gettingData.getDataById)
router.delete('/deleteDataById/:id', deleteData)
router.put('/updateDataById/:id', updateData)

module.exports = router;