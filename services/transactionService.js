const db = require('../models');

exports.createTransaction = async function(data) {
    try {
        return await Transaction.create(data);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        throw error;  // Vous pouvez choisir de relancer l'erreur ou de la gérer différemment.
    }
};

exports.getAll = async function() {
    return await Transaction.findAll();
};

exports.getTransactionById = async function(id) {
    return await Transaction.findByPk(id);
};
exports.updateTransaction = async function(id, data) {
    return await Transaction.update(data, {
        where:{
            id: id
        }
    });
};
exports.deleteTransaction = async function(id){
    return await Transaction.destroy({
        where: {
            id: id
        }
    })  
};