export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    title: {
      //defaultValue: 'member',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Title cannot be empty' },
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Role.hasMany(models.User, {
          foreignKey: {
            name: 'roleId'
          }
        });
      }
    },
    freezeTableName: true
  });
  return Role;
};
