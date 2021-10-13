const database = require("./../database");
const Sequelize = require("sequelize");

const Cerveja = database.define("cervejas", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ibu: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teoralcoolico: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fabricante: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Cerveja;