const db = require("../models");


exports.createComment = async (req, res) => {
    const comment = await db.Comment.create({
        content: req.body.content
    });
};

exports.findAllComments = async (req, res) => {
    const comments = await db.Comment.findAll();
};

exports.findOneComment = async (req, res) => {
  const comment = await db.Comment.findOne({
    where: { id: req.params.id },
  });
};

exports.updateComment = async (req, res) => {
    let comment = await db.Comment.findOne({ where: { id: req.params.id } });
    if (req.body.content) {
        comment.content = req.body.content.then(() => res.status(200).json({ message: "Commentaire modifié !" }))
        .catch(error => res.status(400).json({ error }))
    }
};

exports.deleteOneComment = (req, res) => {
    db.Comment.destroy({ where: { id: comment.id } }).then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
    .catch(error => res.status(400).json({ error }));
};