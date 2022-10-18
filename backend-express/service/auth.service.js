const bcrypt = require("bcrypt");
const knexInstance = require("../bin/database")
async function login (username,password){
    let user = await knexInstance("users").where({ username }).first();
    if(!user){
        throw new Error("User Not Found")
    }
    let result = await bcrypt.compare(password, user.password);
    if(!result){
        throw new Error("Invalid Password")
    }
    return user
}
async function register (username,password){
    let query = await knexInstance("users").where({ username }).first();
    if(query){
        throw new Error("User Registrated")
    }
    const hashed = await bcrypt.hash(password, 10);
    let newUser = await knexInstance("users").insert({ username, password: hashed });
    return newUser
}
module.exports = {
    login,
    register
}