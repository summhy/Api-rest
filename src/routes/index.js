const {Router} = require("express");
const router = Router();

router.get("/",(req,res)=>{
    res.json({"titulo":"Api Rest"})
})

router.get("/test",(req,res)=>{
    const data = {"titulo":"Api Rest TEST"};
    res.json(data)
})

module.exports = router;