const express = require('express');
const router = express.Router();

// const path = require('path');
// router.use(express.static(path.join(__dirname, 'build')));

// router.get('/', (req, res) =>{
//   res.sendFile( path.join(__dirname, 'build', 'index.html'));
// });

router.get('/', (req, res) =>{
  res.send({ response: 'I am alive'}).status(200);
});

module.exports = router;