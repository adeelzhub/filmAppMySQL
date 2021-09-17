const {sequelize } = require("../db/connection");
const { DataTypes} = require("sequelize");


const Film = sequelize.define("Film", {
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    actor:{
        type: DataTypes.STRING,
        defaultValue: "Not specified"
    },
    like:{
        type: DataTypes.STRING,
        defaultValue: "good"      
    }
});

module.exports = Film;