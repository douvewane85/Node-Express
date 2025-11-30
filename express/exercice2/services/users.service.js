import { users } from '../mock.js';

class UsersService {
    getAllUsers(role = null) {
        if (!role) return users;
        return users.filter(u => u.roles && u.roles.some(r => r.name === role));
    }

    getUserById(id) {
        return users.find(u => u.id === parseInt(id));
    }

    createUser(data) {
        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            ...data
        };
        users.push(newUser);
        return newUser;
    }

    updateUser(id, data) {
        const user = users.find(u => u.id === parseInt(id));
        if (!user) return null;
        Object.assign(user, data);
        return user;
    }

    deleteUser(id) {
        const index = users.findIndex(u => u.id === parseInt(id));
        if (index === -1) return null;
        return users.splice(index, 1)[0];
    }

    changePassword(id, newPassword) {
        const user = users.find(u => u.id === parseInt(id));
        if (!user) return null;
        user.password = newPassword;
        return user;
    }
}

export default new UsersService();
