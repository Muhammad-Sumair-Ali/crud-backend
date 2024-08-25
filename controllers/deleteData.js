const User = require('../models/userData')

const deleteData = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await User.findByIdAndDelete(id) 
        res.status(200).json({
            status: 'succesfully Deleted',
            data: data
        })
        console.log(data)
    } catch (error) {
        res.status(500).json({
            status: 'failed to delete',
            data:"internal error"
        }) 
    }
}

module.exports = deleteData;