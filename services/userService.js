
//const User = require('../models/user');
const db = require('../models');

exports.createUser = async function(data) {
    try {
        return await User.create(data);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        throw error;  // Vous pouvez choisir de relancer l'erreur ou de la gérer différemment.
    }
};

exports.getAll = async function() {
    console.log("Dans fonction exports.getall() dans userservice.js")
    return await db.User.findAll();
};

exports.getUserById = async function(id) {
    return await db.User.findByPk(id);
};
exports.updateUser = async function(id, data) {
    return await db.User.update(data, {
        where:{
            id: id
        }
    });
};
exports.deleteUser = async function(id){
    return await db.User.destroy({
        where: {
            id: id
        }
    })  
};