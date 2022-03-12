const router = require("express").Router();

router.get("/test", (req, res)=>{
    res.send("User test success")
})

router.post("/user", (req, res)=>{
    const username = req.body.username
    res.send("Your username is " +username)
})

module.exports = router