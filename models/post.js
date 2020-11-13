"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post",{
      title: {
        type: DataTypes.STRING,
        validate :{
          len: [5,150]
        },
        allowNull: false,
      },
       body: {
        type: DataTypes.STRING,
        validate:{
          len:[25,50]
        },
        allowNull: false,
        },
        image:{
          type:DataTypes.STRING,
          validate:{
            len:[5,100]
          },
          allowNull:false,
        },
      userID: {
        type: DataTypes.INTEGER,
        validate:{
          len:[1,5]
        },
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
