const path = require('path');
const post = require("../models").post;
class postcontroller {
    static getPost(req, res) {
        res.sendFile(path.resolve(__dirname, "../views/post.html"));
      }
    static createPost(req,res){
        console.log(req.body)
        post.create({
            title:req.body.title,
            body:req.body.body,
            userID:req.body.userID,
            image:req.body.image
        })
        .then(queryResult =>{
            res.send(queryResult)
        })
        .catch(error=>console.log(error))
    }

    static editPost(req,res){
        post.update({
            title:req.body.title,
            body:req.body.body,
            userID:req.body.userID,
            image:req.body.image
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

    static deletePost(req, res) {
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
    static showPost (req,res){
        post.findAll()
        .then(queryResult=>
            res.send(queryResult))
            .catch(error=>console.log(error));
    }
}
module.exports = postcontroller;