'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Addnewposts extends Model {}

  Addnewposts.init({
      title:{
        type:DataTypes.STRING,
      },
      posttype:{
        type:DataTypes.STRING,
      },
      postdesc:{
        type: DataTypes.STRING,
   },
},{
    sequelize,
    modelName: 'addnewposts'
  });



  return Addnewposts;
};
