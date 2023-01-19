var express = require("express");
var router = express.Router();
const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

/* GET users listing. */
router.post("/set_location", async function (req, res) {
  try {
    const { uuid, lat, lon } = req.body;
    console.log(req.body);
    let user = await prisma.user.findFirst({ where:{uuid: uuid} });
    if (!user)
      user = await prisma.user.create({data:{ uuid: uuid, lat: lat, lon: lon }});
    else
      user =await prisma.user.update({
        where: { uuid: uuid },
        data: { lat: lat, lon: lon },
      });
    res.send(user);
  } catch (error) {
	console.log(error);
    res.status(error.status || 500);
    res.render("error");
  }
});

module.exports = router;
