const User = require('../models/userData')

const createData = async (req,res) => {
    try {
        const { name,degree,age } = req.body;
        const data = await User.create({
            name,degree,age
        }) 
        res.status(200).json({
            status: 'succesfully created ',
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

module.exports = createData;