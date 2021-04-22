const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

//Global requests
app
  .route("/articles")
  .get((req, res) => {
    Article.find((err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (!err) {
        res.send("Created: " + newArticle.title);
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        res.send("DELETED EVERYTHING!!!!");
      } else {
        res.send(err);
      }
    });
  });

// Specific requests
//req.params.articleTitle
app
  .route("/articles/:articleTitle")
  .get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No matching articles");
      }
    });
  })
  .put((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      (err) => {
        if (!err) {
          res.send("Updated");
        }
      }
    );
  })
  .patch((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      (err) => {
        if (!err) {
          res.send("Article updated");
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) {
        res.send(req.params.articleTitle + " deleted");
      } else {
        res.send(err);
      }
    });
  });

app.listen(3001, function () {
  console.log("Server started on port 3001");
});

//Individual requests
//GET
// app.get("/articles", (req, res) => {
//     Article.find((err, foundArticles) => {
//       if (!err) {
//         res.send(foundArticles);
//         console.log("ahhhhh!");
//       } else {
//         res.send(err);
//       }
//     });
//   });

//POST
// app.post("/articles", (req, res) => {
//   console.log(req.body.title);
//   console.log(req.body.content);

//   //saving the post on the db
//   const newArticle = new Article({
//     title: req.body.title,
//     content: req.body.content,
//   });
//   newArticle.save((err) => {
//     if (!err) {
//       res.sendStatus(200);
//     } else {
//       res.send(err);
//       res.sendStatus(500);
//     }
//   });
// });

//DELETE
// app.delete("/articles", (req, res) => {
//   Article.deleteMany((err) => {
//     if (!err) {
//       res.sendStatus(200);
//     } else {
//       res.send(err);
//       res.sendStatus(500);
//     }
//   });
// });
