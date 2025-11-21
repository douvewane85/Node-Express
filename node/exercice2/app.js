import userService from "./userService.js";

//Create User
console.log('Users:', userService.createUser({
        name: "Alice", 
       email: "alice@mail.com" ,
       password: "1234"
}));
// Quick smoke test: afficher tous les utilisateurs
console.log('Users:', userService.getAllUsers());
// Quick smoke test: afficher tous les utilisateurs
console.log('Users:', userService.getUserById(1));

// Quick smoke test: afficher tous les utilisateurs
console.log('Users:', userService.deleteUser(1));