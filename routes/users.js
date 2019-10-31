var express = require('express');
var router = express.Router();
var users = { items: [] };

router.get("/", function(req, res, next){
  res.send(users)
})

router.post('/', (req, res) => {
  users.items.push(req.body)
  res.send('OK')
})

router.delete("/", (req, res) => {
  let currentItem = users.items = users.items.filter(function (i) {
    return i.email != req.body.email;
  })
  res.json({
    response: currentItem
  })

})



module.exports = router;
