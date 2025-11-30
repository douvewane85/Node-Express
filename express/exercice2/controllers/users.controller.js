import ResponseFormat from "../core/response.format.js";
import UsersService from "../services/users.service.js";

const indexUser=(req, res) => {
    const { role, page, size } = req.query;
    const result = UsersService.getAllUsers(role, page, size);
    return res.sendSuccess(result, "Utilisateurs récupérés avec succès", 200);
};
const showUser=(req, res) => {
    const user = UsersService.getUserById(req.params.id);
    if (user) 
      res.sendSuccess(user, "Utilisateur trouvé", 200);
    else 
        res.sendError("Utilisateur non trouvé", 404);
};
const createUser=(req, res) => {
    const newUser = UsersService.createUser(req.body);
    res.sendSuccess(newUser, "Utilisateur créé avec succès", 201);
};
const destroyUser=(req, res) => {
    const user = UsersService.getUserById(req.params.id);
    if (user) {
        UsersService.deleteUser(req.params.id);
        res.sendSuccess(null, "Utilisateur supprimé avec succès", 200);
    } else {
        res.sendError("Utilisateur non trouvé", 404);
    }
};

const updateUser=(req, res) => {
    const user = UsersService.updateUser(req.params.id, req.body);
    if (user) {
        res.sendSuccess(user, "Utilisateur mis à jour avec succès", 200);
    } else {
        res.sendError("Utilisateur non trouvé", 404);
    }
};
const changePassword=(req, res) => {
    const { newPassword } = req.body;
    const user = UsersService.changePassword(req.params.id, newPassword);
    if (user) {
        res.sendSuccess(user, "Mot de passe mis à jour avec succès", 200);
    } else {
        res.sendError("Utilisateur non trouvé", 404);
    }
};

export default {
    indexUser,
    showUser,
    createUser,
    destroyUser,
    updateUser,
    changePassword
};