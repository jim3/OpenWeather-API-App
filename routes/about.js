const express = require("express");
const router = express.Router();

// Important to remember, the path is `/` and not `/about`
router.get("/", async (req, res, next) => {
    res.render("about", { title: "About" });
});

module.exports = router;
