const User = require('../models/userData')

const getData = async (req,res) => {
    try {
        const data = await User.find()
        res.status(200).json({
            status: 'success getData',
            data: data
        })
        console.log(data)
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            data:"internal error"
        }) 
    }
}
const getDataById = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await User.findById(id)
        res.status(200).json({
            status: 'success get data by id',
            data: data
        })
        console.log(data)
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            data:"internal error"
        }) 
    }
}

module.exports = {getData,getDataById};