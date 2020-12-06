module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
        },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.UUID
      }
    });
  
    return Blog;
  };