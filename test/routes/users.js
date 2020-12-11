var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  if (req.body.cookieName && req.body.selectCookie) {
    if (req.body.selectCookie == "sessionCookie") {
      res.cookie("sessionCookie", req.body.cookieName);
      res.send("<a href='/'>누르시오<a>");
    } else {
      res.cookie("sessionCookie", req.body.cookieName, { maxAge: 5000 });
      res.send("<a href='/'>누르시오<a>");
    }
  } else {
    res.send("입력이 올바르지 않습니다.");
  }
});

module.exports = router;
