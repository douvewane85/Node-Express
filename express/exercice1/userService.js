import { users } from './data.js';

class UserService {
    getAllUsers() {
        return users;
    }

    getUserById(id) {
        return users.find(user => user.id === parseInt(id));
    }

    createUser(userData) {
        const newUser = {
            id: users.length + 1,
            ...userData
        };
        users.push(newUser);
        return newUser;
    }

    updateUser(id, userData) {
        const user = users.find(u => u.id === parseInt(id));
        if (user) {
            Object.assign(user, userData);
        }
        return user;
    }

    deleteUser(id) {
        const index = users.findIndex(u => u.id === parseInt(id));
        if (index !== -1) {
            return users.splice(index, 1)[0];
        }
        return null;
    }
}

export default new UserService();