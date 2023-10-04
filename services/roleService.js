const db = require('../models');

exports.createRole = async function(data) {
    return await Role.create(data);
};

exports.getAll = async function() {
    return await Role.findAll();
};

exports.getRoleById = async function(id) {
    return await Role.findByPk(id);
};
exports.updateRole = async function(id, data) {
    return await Role.update(data, {
        where:{
            id: id
        }
    });
};
exports.deleteRole = async function(id){
    return await Role.destroy({
        where: {
            id: id
        }
    })  
};