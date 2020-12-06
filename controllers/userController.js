const db = require("../model");
const User = db.users;
// const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.userName || !req.body.password) {
    res.status(400).send({
      message: "Username or password is missing"
    });
    return;
  }

  const user = {
    userName: req.body.userName,
    password: req.body.password,
    isActive: true
  };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Cant able to create user"
      });
    });
};

exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};

exports.update = (req, res) => {
  
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "User was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update User with id=${id}`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
        });
};

exports.delete = (req, res) => {
  
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "User was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete User with id=${id}`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
        });
};
