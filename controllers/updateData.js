const User = require('../models/userData')

const updateData = async (req,res) => {
    try {
        const { id } = req.params;
        const data = await User.findByIdAndUpdate(id,req.body,{new:true}) 
        res.status(200).json({
            status: 'succesfully changed',
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

module.exports = updateData;