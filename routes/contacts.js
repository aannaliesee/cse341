const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());


const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
//Lesoon3 Create, Update, Delete contacts
router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;