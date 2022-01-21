const Sequelize = require('sequelize');
const db = require('./models');

console.log("Hello")

db.User.findAll({
attributes: ['name','email']
})
.then((users) => {
    users.forEach(user => {
console.log(user.name);
console.log(user.email);

    });

})