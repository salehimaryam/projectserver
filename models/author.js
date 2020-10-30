"use strict";
module.exports = (sequelize,DataTypes) => {
    const author = sequelize.define("author",{
      firstname:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      username:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      UserId:{
          type: DataTypes.STRING,
          allowNull: false,
      },
    },
    {
        freezeTableName: true,
        collate: "utf8_general_ci",
      }
    );
    return author;
}