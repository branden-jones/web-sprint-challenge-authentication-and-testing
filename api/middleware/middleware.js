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
        next({
            status: 400,
            message: 'username already exists'
        })
    }
}

const findPastUser = async (req,res,next) => {
    const { username, password } = req.body
    
    try{
        if( !username || !password ){
            next({
                status: 401,
                message: 'username and password required'
            })
        }
        else{
            const pastUser = await getByName(username)
            if(pastUser){
                req.user = pastUser
                next()
            }
            else{
                next({
                    status: 401,
                    message: 'invalid credentials'
                })
            }
        }
    }
    catch(err){
        next(err)
    }
}




module.exports = {
    registerName,
    findPastUser,
}