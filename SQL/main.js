const pgp = require("pg-promise")();
const db = pgp("postgres://postgres:august75@localhost:5432");

db.any("SELECT * from tasks").then((tasks) => console.log(tasks));