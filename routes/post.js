const path = require('path');
const postcontroller = require('../controllers/postcontroller');
module.exports = (router)=>{
    router.get("/home", function (req, res) {
        postcontroller.getPost(req, res);
      });
      router.post("/createPost",function(req,res){
      postcontroller.createPost(req,res);
      });
      router.post("/deletePost",function(req,res){
        postcontroller.deletePost(req,res);
      });
      router.post("/editPost",function(req,res){
        postcontroller.editPost(req,res);
      });
      router.post("/showPost" , function(req,res){
        postcontroller.showPost(req,res);
      });
      return router;
};