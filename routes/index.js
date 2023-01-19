var express = require("express");
var router = express.Router();
const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

/* GET home page. */
router.get("/", async function (req, res, next) {
  if (!req.session) {
    res.redirect("/login");
  } else {
    let data = await prisma.user.findMany();
    res.render("index", { data: data, session: req.session });
  }
});
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

router.post("/login", async function (req, res) {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email);console.log(password);
  try {
    if (email!=null & password!=null) {
      console.log("asddddddd");
      var user = await prisma.admin.findFirst({ where: { email: email } });
      console.log(user);
      if (!user) {
        res.send("Incorrect Email Address");
      } else {
        if (user.password === password) {
          console.log(req.session);
          req.session.user = user;
          res.redirect("/");
        } else {
          res.send("Incorrect password");
        }
      }
    } else {
      console.log("sssssssssssss");
      res.send("Please Enter Email Address and Password Details");
      res.end();
    }
  } catch (error) {
    console.log(error)
    res.send("Please Enter Email Address and Password Details");
    res.end();
  }
});
module.exports = router;
