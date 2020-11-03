const path = require('path');
const post = require("../models").post;
class postcontroller {
    static getpost(req, res) {
        res.sendFile(path.resolve(__dirname, "../views/post.html"));
      }
    static createpost(req,res){
        console.log(req.body)
        post.create({
            title:req.body.title,
            body:req.body.body,
            userID:req.body.userID,
        })
        .then(queryResult =>{
            res.send(queryResult)
        })
        .catch(error=>console.log(error))
    }

    static editpost(req,res){
        post.update({
            title:req.body.title,
            body:req.body.body,
            userID:req.body.userID
        },
        {
            where: {
                id:req.body.id,
            }
        })
        .then(queryResult =>{
            res.send(queryResult)
        })
        .catch(error=>console.log(error));
    }

    static deletepost(req, res) {
        post.destroy({
            where: {
                id:req.body.id
            }
        })
        .then(queryResult => {
            res.sendStatus(200)
            })
        .catch(error=>console.log(error))
    }
    static showpost (req,res){
        post.findAll()
        .then(queryResult=>
            res.send(queryResult))
            .catch(error=>console.log(error));
    }
}
module.exports = postcontroller;