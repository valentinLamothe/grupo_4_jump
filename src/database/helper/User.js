// 1. Guardar al usuario en la DB
// 2. Buscar al usuario que quiere loguear por su email
// 3. Buscar a un usuario por su ID
// 4. Editar la informacion de un usuario
// 5. Eliminar a un usuario de la DB 

// !!Ahora voy a crear un objeto literal con distintos metodos que se va encargar de estas caracteriticas !!

const fs = require('fs')
const path = require('path')

const User = {
    fileName: path.join(__dirname, '../src/data//users.json'),

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound
    },

    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ... userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' ')); // El null y el espacio entre comillas se pone para que quede ordenado en el archivo JSON.
        return newUser;
    },

    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id) // Va a mostrar solo los que son distintos.
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;