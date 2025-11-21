import userService from "./services/userService.js";

// Exemple d'utilisation asynchrone (top-level await)
const created = await userService.createUser({
        name: "Alice1",
        email: "alice@mail.com",
        password: "1234",
});
console.log('Created:', created);

console.log('Users:', await userService.getAllUsers());
console.log('User By Id :', await userService.getUserById(2));