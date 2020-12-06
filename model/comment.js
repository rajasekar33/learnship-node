module.exports = (sequelize, Sequelize) => {
    const comment = sequelize.define("comment", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
        },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      blogId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      commenter_username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      commenter_email: {
        type: Sequelize.STRING,
        required: true
      },
      status: {
        type: Sequelize.ENUM,
        values: ['approved', 'rejected', 'in review'],
        defaultValue: 'in review'
  
      }
    });
  
    return comment;
  };