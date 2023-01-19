var express = require("express");
var router = express.Router();
const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

/* GET home page. */
router.get("/", async function (req, res, next) {
  if(! req.session.user){
    res.redirect("/login");
  }
  else{ let data = await prisma.user.findMany();
  res.render("index", { data: data ,session:req.session});}
});
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

router.post("/login", async function (req, res) {
  const { email, password } = req.body;
  try {
    if ((email & password)) {
      var user = await prisma.admin.findFirst({ where: { email: email } });
      if (!user) {
        res.send("Incorrect Email Address");
      } else {
        if (user.password == password) {
          req.session.user = user;
          response.redirect("/");
        } else {
          res.send("Incorrect password");
        }
      }
    }
  } catch (error) {
    res.send("Please Enter Email Address and Password Details");
    res.end();
  }
});
module.exports = router;
