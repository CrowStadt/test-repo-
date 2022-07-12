var router = require('express').Router(); 

const sessions = {}

function validate(req,res,next){
    return "wh"
}

router.get('/', function(req,res,next) {
    console.log(req.session)
    res.send("Welcome to the root")
});

router.use('/auth', function(req,res,next) {
    res.send("Welcometo the HEV mk4")
});


module.exports = router;
return router
