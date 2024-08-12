var express = require('express');
var router = express.Router();
const userModel=require("./users");
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/create', async function(req, res) {
const userdata  =await userModel.create({
    username:"Arjumand",
    nicknamee:"Rani",
    description:"Iam a 28 years old  girl and I love travelling.",
    categories:["Mumbai","Banglore","Delhi"],
    })
    res.send(userdata);
});

router.get("/find",async function(req,res){
var date1=new Date("2024-08-12");
var date2=new Date("2024-08-12");
  let user=await userModel.find({
    datecreated:{$gte:date1,$lte:date2}
  });
  res.send(user);
})


// router.get("/find",async function(req,res){
//   let user=await userModel.find({
//     categories:{$all:["Mumbai"]}
//   });
//   res.send(user);
// })

// router.get("/find",async function(req,res){
//   var regex=new RegExp("^AMeen$","i");

//   const user=await userModel.findOne({
//     username:regex
//   });

// const user=await userModel.find({
//   username:regex
// });
// res.send(user);
// })

// router.get('/failed', function(req, res) {
//   req.flash("age",24);
//   req.flash("name","Amreen");
//   res.send("Bangaya data");
// });

// router.get('/checkkaro', function(req, res) {
//   console.log(req.flash("age"),req.flash("name"));
//  // console.log(req.flash("name"));
//   res.send("check kiya data terminal pe backend ke");
// });

module.exports = router;
