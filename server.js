const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);

app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});