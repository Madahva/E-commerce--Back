const Router = require("express");

const router = Router();

router.use("/", async (req,res) => {
  res.send("hola mundo");
});

module.exports = router;
