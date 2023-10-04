
const db = require('../models');
exports.createBusiness = async function(data) {
    return await db.Business.create(data);
};

exports.getAll = async function() {
    return await db.Business.findAll();
};

exports.getBusinessById = async function(id) {
    return await db.Business.findByPk(id);
};
exports.updateBusiness = async function(id, data) {
    return await db.Business.update(data, {
        where:{
            id: id
        }
    });
};
exports.deleteBusiness = async function(id){
    return await db.Business.destroy({
        where: {
            id: id
        }
    })  
};