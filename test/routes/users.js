var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  if (req.body.cookieName && req.body.selectCookie) {
    if (req.body.selectCookie == "sessionCookie") {
      res.cookie("Cookie", req.body.cookieName);
    } else if (req.body.selectCookie == "permanentCookie") {
      res.cookie("Cookie", req.body.cookieName, {
        expires: new Date(Date.now() + 10000),
      });
    } else {
      res.send("입력이 올바르지 않습니다.");
      res.end();
    }
    res.send("<a href='/'>클릭<a>");
  } else {
    res.send("입력이 올바르지 않습니다.");
  }
});

module.exports = router;
