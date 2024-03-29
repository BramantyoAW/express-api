module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowNull: false
          },
          name: {
            type : DataTypes.STRING,
            allowNull: false
          },
          email: {
            type : DataTypes.STRING,
            allowNull: false
          },
          username: {
            type : DataTypes.STRING,
            allowNull: false
          },
          password: {
            type : DataTypes.STRING,
            allowNull: false
          },
          createdAt:{
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt:{
            type: DataTypes.DATE,
            allowNull: false
          }
    },{
        tableName: 'users'
    });

    return Users;
}