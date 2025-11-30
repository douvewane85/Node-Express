import userService from "./userService.js";

const getAllUsers = (req, res) => {
    const { role, page, size } = req.query;
    const result = userService.getAllUsers(role, page, size);
    res.sendSuccess(result, "Utilisateurs récupérés avec succès", 200);
};

const getUserById = (req, res) => {
    const user = userService.getUserById(req.params.id);
    if (user) 
        res.sendSuccess(user, "Utilisateur trouvé", 200);
    else 
        res.sendError("Utilisateur non trouvé", 404);
};

const createUser = (req, res) => {
    console.log(req.body);
    const newUser = userService.createUser(req.body);
    res.sendSuccess(newUser, "Utilisateur créé avec succès", 201);
};

const deleteUser = (req, res) => {
    const user = userService.getUserById(req.params.id);
    if (user) {
        userService.deleteUser(req.params.id);
        res.sendSuccess(null, "Utilisateur supprimé avec succès", 200);
    } else {
        res.sendError("Utilisateur non trouvé", 404);
    }
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};
