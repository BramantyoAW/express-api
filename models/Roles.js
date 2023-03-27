module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowNull: false
          },
        roleCode: {
            type : DataTypes.STRING,
            allowNull: false
        },
        roleName: {
            type : DataTypes.STRING,
            allowNull: false
        },
        desc: {
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
        tableName: 'roles'
    });

    return Roles;
}