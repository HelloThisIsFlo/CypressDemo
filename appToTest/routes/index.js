var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/greeting", (req, res) => {
  const name = req.body.name;
  res.render("greeting", {
    title: "Greeting",
    name,
  });
});

module.exports = router;
