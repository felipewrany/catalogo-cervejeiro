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
    type: Sequelize.STRING
    
  },
  tipo: {
    type: Sequelize.STRING
    
  },
  ibu: {
    type: Sequelize.INTEGER
  },
  teoralcoolico: {
    type: Sequelize.DECIMAL
  },
  fabricante: {
    type: Sequelize.STRING
  },
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Cerveja;