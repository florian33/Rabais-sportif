
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
    const transaction = await db.sequelize.transaction();
    console.log(id);
    console.info(data);
    try {
        console.log("Dans le try de UpdateUser");

        const result = await db.User.update(data, {
            where: {
                id: id
            },
            transaction: transaction // Utiliser la transaction ici
        });

        await transaction.commit(); // Engager la transaction si tout se passe bien

        console.info(result);

    } catch (error) {
        await transaction.rollback(); // Annuler la transaction en cas d'erreur
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    }
};
exports.deleteUser = async function(id){
    return await db.User.destroy({
        where: {
            id: id
        }
    })  
};