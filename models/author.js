"use strict";
module.exports = (sequelize,DataTypes) => {
    const authors = sequelize.define("authors",{
      username:{
          type: DataTypes.STRING,
          validate:{
              len:[5,50]
          },
          allowNull: false,
      },
     password:{
          type: DataTypes.STRING,
          validate:{
              len:[5,20]
          },
          allowNull: false,
      },
      email:{
          type:DataTypes.STRING,
          validate:{
              len:[5,100]
          },
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