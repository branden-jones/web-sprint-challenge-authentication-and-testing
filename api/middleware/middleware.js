const {
    getById,  //eslint-disable-line
    getByName
} = require('../auth/auth-model');


const registerName = async (req,res,next) => {
    const { username } = req.body
    const doesItExist = await getByName(username)
    if (!doesItExist){
        next()
    }
    else{
        res.status(401).json(`username taken`)
    }
}

const findPastUser = async (req,res,next) => {
    const { username, password } = req.body
    
    try{
        if( !username || !password ){
            res.status(401).json('username and password required')
        }
        else{
            const pastUser = await getByName(username)
            if(pastUser){
                req.user = pastUser
                next()
            }
            else{
                res.status(401).json('invalid credentials')
            }
        }
    }
    catch(err){
        next(err)
    }
}

const validateCredentials = (req,res,next) => {
    const { username, password } = req.body;
    if( !username || !password ){
        res.status(401).json('username and password required')
    }
    else{
        next()
    }
}



module.exports = {
    registerName,
    findPastUser,
    validateCredentials
}