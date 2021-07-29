module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },);
    Post.associate = function(models) {
      Post.hasMany(models.Comment, {
        foreignKey: 'postId',
        as: 'comments',
        onDelete: 'CASCADE',
      });
  
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      })
    };
    return Post;
  };