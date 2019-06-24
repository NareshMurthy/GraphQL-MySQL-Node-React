const Sequelize = require("sequelize");
//DB connections to Postgres
const sequelize = new Sequelize("postgres", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false
  }
});

module.exports = { sequelize };
