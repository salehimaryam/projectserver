"use strict";
module.exports = (sequelize,DataTypes) => {
    const authors = sequelize.define("authors",{
      username:{
          type: DataTypes.STRING,
          allowNull: false,
      },
     password:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      email:{
          type:DataTypes.STRING,
          allowNull: false,
      },
    },
    {
        freezeTableName: true,
        collate: "utf8_general_ci",
      }
    );
    authors.associate = function (models) {
      
        authors.hasMany(models.post, {
            foreignKey: "userID"
        });
    };
    return authors;
}