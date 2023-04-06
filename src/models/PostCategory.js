
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true,foreignKey: true }
      },
      { 
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      },
    );
  
    PostCategory.associate = ({BlogPost, Category }) => {
        BlogPost.belongsToMany(Category, {
        as: 'category',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });
      Category.belongsToMany(BlogPost, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    };
  
    return PostCategory;
  };
  