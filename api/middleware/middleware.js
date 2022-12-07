const db = require('../../data/dbConfig');

async function checkNameExist(req,res,next){
    const doesItExist = await db('users')
        .where('username', req.body.username)
        .first()
    if (!doesItExist){
        next()
    }
    else{
        next({
            status: 400,
            message: 'username already exists'
        })
    }
}


module.exports = {
    checkNameExist
}