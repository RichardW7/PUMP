
let express = require("express");

let router = express.Router();

router.get('/', async (req, res) => {
    res.send(1);
});

module.exports = router;