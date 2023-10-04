const db = require('../models');

exports.createClub = async function(data) {
    return await db.Club.create(data);
};

exports.getAll = async function() {
    return await db.Club.findAll();
};

exports.getClubById = async function(id) {
    return await db.Club.findByPk(id);
};
exports.updateClub = async function(id, data) {
    return await db.Club.update(data, {
        where:{
            id: id
        }
    });
};
exports.deleteClub = async function(id){
    return await db.Club.destroy({
        where: {
            id: id
        }
    })  
};