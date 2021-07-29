module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
     content: {
        type: DataTypes.STRING,
        allowNull: false,
        }, 
              
    });
    Comment.associate = function(models) {
        Comment.belongsTo(models.Post, {
          foreignKey: 'postId',
          onDelete: 'CASCADE',
        });
    
        Comment.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        })
      };
    return Comment;
  };