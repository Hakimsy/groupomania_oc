const db = require("../models");

exports.createPost = async (req, res) => {
   const post = await  db.Post.create({
        description: req.body.description,
    });
};

exports.findAllPosts = (req, res) => {
    db.Post.findAllPosts();
};

exports.findOnePost = (req, res) => {
    db.Post.findOne({ where: {id: req.params.id} } );
};

exports.updatePost = async (req, res) => {
    db.Post.findOne({ where: { id: req.params.id } })
        .then((post) => post.description = req.body.description).catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res) => {
    db.Post.destroy({ where: { id: req.params.id } }).then(() => res.status(200).json({ message: "Post supprimé !" }))
    .catch(error => res.status(400).json({ error }));
};
