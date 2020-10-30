"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define("comment",{
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
        freezeTableName: true,
        collate: "utf8_general_ci",
      }
    );
    return comment;
}