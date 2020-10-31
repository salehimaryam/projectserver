const path = require('path');
const authorcontroller = require('../controller/authorcontroller');
module.exports = (router)=>{
    router.get("/home", function (req, res) {
        authorcontroller.getauthor(req,res);
      });
      router.post("/register", function (req, res) {
        authorcontroller.register(req, res);
      });
      router.post("/login", function (req, res) {
        authorcontroller.login(req, res);
      });
      return router;
}