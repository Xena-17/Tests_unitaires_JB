// userService.js
let users = [];

function addUser(name, email, password, address) {
    const user = { id: users.length + 1, name, email, password, address };
    users.push(user);
    return user;
}

function getUser(id) {
    return users.find(user => user.id === id);
}

function updateUser(id, newName, newEmail, newPassword, newAddress) {
    const user = getUser(id);
    if (!user) return null;
    user.name = newName;
    user.email = newEmail;
    user.password = newPassword;
    user.address = newAddress;
    return user;
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0]; // Retire l'utilisateur et le retourne
    }
    return null;
}

module.exports = { addUser, users, getUser, updateUser, deleteUser };
