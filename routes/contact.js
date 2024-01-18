const express = require('express');
const router = express.Router();

// Your route definitions will go here
const Contact = require('./models/Contact'); // Assuming you have a Contact model

//route to handle the GET request to retrieve all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//route to handle GET request to retrieve a single contact by ID
router.get('/:id', async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json(contact);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
