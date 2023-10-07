
//const UserClub = require('../services/userclubService');
const Club = require('../services/clubService');
const User = require('../services/userService');
//console.log("Chargement du controller Usercontroller")
module.exports = {
    async createUser(req, res) {
        const now = new Date();
        try {
            const data = req.body;
        // 1. Valider les données
        if (!data.firstName || !data.lastName || !data.email) {
            return res.status(400).send('Champs manquants ou invalides.');
        }

        // 2. Nettoyer les données (si nécessaire)
        // Par exemple, supprimer les espaces inutiles des noms et prénoms
        data.firstName = data.firstName.trim();
        data.lastName = data.lastName.trim();
        data.createdAt = now;

        // Vous pouvez également effectuer d'autres ajustements ici, selon vos besoins.

        // 3. Insérez les données
        const user = await User.create(data);
        res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await User.getAll();
            res.status(200).render('users', {title: 'Menu des usagers', users: users });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    async getUserById(req, res) {
        try {
            console.log("getUserById");
            const user = await User.getUserById(req.params.id, {
                include: Club // Si vous voulez obtenir aussi les clubs associés à cet utilisateur
            });
            
            if (user) {
                res.status(200).send(user);
            } else {
                res.status(404).send("User not found");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    async updateUser(req, res) {
       //console.info(req);
        try {
            await User.updateUser(req.params.id, req.body);
            res.status(200).send("User updated successfully");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    async deleteUser(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send("User deleted successfully");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // ... autres méthodes spécifiques au contrôleur user ...
};