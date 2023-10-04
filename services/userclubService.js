const db = require('../models');

exports.addUserToClub = async function(userId, clubId) {
    try {
        return await db.UserClubs.create({ userId, clubId });
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'utilisateur au club:", error);
        throw error;
    }
};

exports.getClubsForUser = async function(userId) {
    try {
        const user = await db.User.findByPk(userId, {
            include: [ 'Clubs' ]
        });
        return user.Clubs;
    } catch (error) {
        console.error("Erreur lors de la récupération des clubs pour l'utilisateur:", error);
        throw error;
    }
};

exports.removeUserFromClub = async function(userId, clubId) {
    try {
        return await db.UserClubs.destroy({ where: { userId, clubId } });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur du club:", error);
        throw error;
    }
};

