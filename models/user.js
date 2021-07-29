module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
         isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {});
  
    User.associate = (models) => {
      User.hasMany(models.Post, {
        onDelete: "cascade",
      });
  
      User.hasMany(models.Comment, {
        onDelete: "cascade",
      });
    };
  
    return User;
  };