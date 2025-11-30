import { users } from "../mock.js";


class UserService {
    getAllUsers(role = null, page = 1, size = 2) {
            let filteredUsers = users;
            // Filtrer par rôle si fourni
            if (role) {
                filteredUsers = users.filter(user => user.roles.some(r => r.name === role));
            }
            // Appliquer la pagination
            const pageNum = parseInt(page) || 1;
            const pageSize = parseInt(size) || 10;
            const startIndex = (pageNum - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
            
           const data= {
                data: paginatedUsers,
                pagination: {
                    currentPage: pageNum,
                    pageSize: pageSize,
                    totalItems: filteredUsers.length,
                    totalPages: Math.ceil(filteredUsers.length / pageSize)
                }
            };
            return data;
            
    }

    getUserById(id) {
        return users.find(user => user.id === parseInt(id));
    }

    createUser(userData) {
        if(userData.roles===undefined) userData.roles=[];
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
    changePassword(id, newPassword) {
        const user = users.find(u => u.id === parseInt(id));
        if (user) {
            user.password = newPassword;
        }
        return user;
    }
}

export default new UserService();