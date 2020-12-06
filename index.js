const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require('./routes/user-router');
const blogRouter = require('./routes/blog-router');
const commentRouter = require('./routes/comment-router');
const aafRouter = require('./routes/aaf')

global.accessTokenSecret = 'youraccesstokensecret';

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./model");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
db.sequelize.sync()


app.get("/", (req, res) => {
  res.json({ message: "Welcome to learnship application." });
});


app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/comment', commentRouter)
app.use('/auth', aafRouter)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
