"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post",{
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       body: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      collate: "utf8_general_ci",
    }
  );
  post.associate = function (models) {
      post.belongsTo(models.authors, {
          foreignKey: "userID"
      });
    
  };
  return post;
};