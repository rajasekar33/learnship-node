const db = require("../model");
const Comment = db.comments;
// const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
  if (!req.body.content || !req.body.userName || !req.body.blogId) {
    res.status(400).send({
      message: "Missing parts"
    });
    return;
  }

  const comment = {
    content: req.body.content,
    commenter_username: req.body.userName,
    blogId:  req.body.blogId
  };

  Comment.create(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Cant able to create comment"
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Comment.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving comment with id=" + id
        });
      });
};

exports.findAll = (req, res) => {
    Comment.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments."
      });
    });
};

exports.update = (req, res) => {
  
    const id = req.params.id;

    Comment.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Comment was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Comment with id=${id}`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating BLog with id=" + id
        });
        });
};

exports.delete = (req, res) => {
  
    const id = req.params.id;

    Comment.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Comment was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete comment with id=${id}`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete comment with id=" + id
        });
        });
};
