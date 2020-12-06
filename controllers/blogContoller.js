const db = require("../model");
const Blog = db.blogs;
// const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
  if (!req.body.title || !req.body.description) {
    res.status(400).send({
      message: "Title or description is missing"
    });
    return;
  }

  const blog = {
    title: req.body.title,
    description: req.body.description,
    userId:  req.body.userId
  };

  Blog.create(blog)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Cant able to create blog"
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Blog.findByPk(id, {include: ["comments"] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Blog with id=" + id
        });
      });
};

exports.findAll = (req, res) => {
    Blog.findAll({include: ["comments"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving blogs."
      });
    });
};

exports.update = (req, res) => {
  
    const id = req.params.id;

    Blog.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Blog was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Blog with id=${id}`
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

    Blog.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Blog was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Blog with id=${id}`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
        });
};
