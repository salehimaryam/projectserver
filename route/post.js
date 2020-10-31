const path = require('path');
const postcontroller = require('../controller/postcontroller');
module.exports = (router)=>{
    router.get("/home", function (req, res) {
        postcontroller.getpost(req, res);
      });
      router.post("/createpost",function(req,res){
         postcontroller.createpost(req,res);
      });
      router.post("/deletepost",function(req,res){
        postcontroller.deletepost(req,res);
      });
      router.post("/editpost",function(req,res){
        postcontroller.editpost(req,res);
      });
      return router;
};