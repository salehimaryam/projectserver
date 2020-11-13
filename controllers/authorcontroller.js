const path = require("path");
const authors = require("../models").authors;
const jwt = require("jsonwebtoken");
class authorcontroller {
  static register(req, res) {
    authors
      .findAll({
        where: {
          username: req.body.username,
        },
      })
      .then((queryResult) => {
        if (Object.keys(queryResult).length == 0) {
          authors
            .create({
              username: req.body.username,
              password: req.body.password,
              email: req.body.email,
              
            })
            .then((queryResult) => {
              res.send("ثبت نام با موفقیت انجام شد.");
            })
            .catch((error) => console.log(error));
        } else {
          res.send("این کاربر وجود دارد.");
        }
      });
  }

  static login(req, res) {
    authors
      .findAll({
        where: {
          username: req.body.username,
          password: req.body.password,
        },
      })
      .then((queryResult) => {
        if (Object.keys(queryResult).length != 0) {
          let token = jwt.sign({ name: "maryam" }, "maryam");
          res.send(token);
        } else {
          res.send("نام کاربری یا رمز عبور اشتباه است");
        }
      });
  }

  static showauthor (req,res){
  authors.findAll()
    .then(queryResult=>
        res.send(queryResult))
        .catch(error=>console.log(error));
}
}
module.exports = authorcontroller;
