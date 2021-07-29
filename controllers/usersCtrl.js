const db = require("../models");

exports.createUser = async (req, res) => {
    console.log(req.body.username);
    return null;
   const newUser = await db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
  })
};

exports.findAllUsers = async (req, res) => {
    const user = await db.User.findAll();
};

exports.findOneUser = async (req, res) => {
    const user = await db.User.findOne({
        where: { id: req.params.id },
      });
};

exports.deleteUser = async (req, res) => {
    db.User.destroy({ where: { id: req.params.id } }).then(() => res.status(200).json({ message: "Utliisateur supprimé !" }))
    .catch(error => res.status(400).json({ error }))
};

