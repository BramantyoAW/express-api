var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const {Users}   = require('../models');

const v = new Validator();
/**next in function is not required, next is required for middleware 
 *  ex: router.get('/all', async (req, res, next) => {
*/
/* GET users listing. */
router.get('/all', async (req, res) => {
  const usersAll = await Users.findAll();

  if (!usersAll) {
    return res.json({message: 'Users not found'});
  }

  try {
    res.json(usersAll)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


/**<base>/users/new */
router.post('/new', async (req, res) => {
  // res.send('create users');
  const schema = {
    name: 'string',
    username : 'string',
    password : 'string'
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res
    .status(400)
    .json(validate);
  };

  try {
    const newUser = await Users.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

/**<base>/users/update/<id> */
router.put('/update/:id', async(req, res) => {
  const id = req.params.id;

  let UsersPut = await Users.findByPk(id);

  if (!UsersPut) {
    return res.json({message: 'Users not found'});
  }

  const schema = {
    name: 'string|optional',
    username : 'string|optional',
    password : 'string|optional'
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res
    .status(400)
    .json(validate);
  };

  try {
    usersUpdate = await UsersPut.update(req.body);
    res.json(usersUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

 /**<base>/users/delete/<id> */
 router.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;
    let findUsers = await Users.findByPk(id);

    if (!findUsers) {
      return res.json({message: 'Users not found'});
    }
  
    try {
     await findUsers.destroy();
     res.json({
        message : 'Users with id '+ id + ' has been deleted'
     })
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
 });
module.exports = router;
