const express = require("express");
const app = express();
const db = require("./models");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post")
const commentRoutes = require("./routes/comment")
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comments", commentRoutes);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});