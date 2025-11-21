import fileStore from '../orm/file.js'

class UserService{
    // normalize stored data to an array of users
    async _readUsers() {
        const data = await fileStore.read(null);
        if (data == null) return [];
        if (Array.isArray(data)) return data;
        if (typeof data === 'object') return [data];
        return [];
    }

    async _writeUsers(users) {
        await fileStore.write(users);
    }

    async getAllUsers() {
      return await this._readUsers();
    }

    async getUserById(id) {
        const users = await this._readUsers();
        return users.find(user => user.id === parseInt(id));
    }

    async createUser(userData) {
        const users = await this._readUsers();
        const nextId = users.length ? Math.max(...users.map(u => u.id || 0)) + 1 : 1;
        const newUser = {
            id: nextId,
            ...userData
        };
        users.push(newUser);
        await this._writeUsers(users);
        return newUser;
    }

    async updateUser(id, userData) {
        const users = await this._readUsers();
        const idx = users.findIndex(u => u.id === parseInt(id));
        if (idx === -1) return null;
        users[idx] = { ...users[idx], ...userData };
        await this._writeUsers(users);
        return users[idx];
    }

    async deleteUser(id) {
        const users = await this._readUsers();
        const idx = users.findIndex(u => u.id === parseInt(id));
        if (idx === -1) return null;
        const [deleted] = users.splice(idx, 1);
        await this._writeUsers(users);
        return deleted;
    }
}

export default new UserService();