/* eslint no-underscore-dangle: ["error", { "allow": ["_changed"] }]*/
import bcrypt from 'bcrypt-nodejs';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'First Name is required'
        },
        is: {
          args: /^[A-Za-z][A-Za-z0-9-]+$/i,
          msg: 'First name should contain only alphabets and have no spaces'
        },
        len: {
          args: [2, 100],
          msg: 'First name length should range between 2 - 100 characters'
        },
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Last Name is required'
        },
        is: {
          args: /^[A-Za-z][A-Za-z0-9-]+$/i,
          msg: 'Last name should contain only alphabets and have no spaces'
        },
        len: {
          args: [2, 100],
          msg: 'Last name length should range between 2 - 100 characters'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 20],
          msg: 'Password length should range between 5 - 20 characters'
        }
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'roleId must be an integer'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'This email is already taken.'
      },
      validate: {
        isEmail: {
          msg: 'Email address is invalid'
        }
      }
    },
       langKey: {
      type: DataTypes.STRING,
     
      validate: {
        isLangKey: {
          msg: 'langKey is invalid'
        }
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.belongsTo(models.Role, {
          foreignKey: {
            name: 'roleId',
            allowNull: false
          }
        });
         
      }
    },
    freezeTableName: true,
    instanceMethods: {
      verifyPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
      hashPassword() {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
      }
    },
    hooks: {
      beforeCreate(user) {
        user.hashPassword();
      },
      beforeUpdate(user) {
        if (user._changed.password) {
          user.hashPassword();
        }
      }
    }
  });
  return User;
};
