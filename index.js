require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// HubSpot API token
const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN;
const HUBSPOT_API = 'https://api.hubapi.com/crm/v3/objects/contacts';

// -------------------- ROUTES -------------------- //

// Homepage: list all contacts (pets)
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${HUBSPOT_API}?properties=name_pet,pet_age,pet_gender,pet_type`, {
      headers: { Authorization: `Bearer ${HUBSPOT_TOKEN}` }
    });

    const contacts = response.data.results;
    res.render('homepage', { contacts });
  } catch (error) {
    console.error(error);
    res.send('Error fetching contacts');
  }
});

// GET form to create new contact (pet)
app.get('/update-cobj', (req, res) => {
  res.render('updates', { title: 'Update Contact (Pet) Form | Integrating With HubSpot I Practicum' });
});

// POST: create new contact (pet)
app.post('/update-cobj', async (req, res) => {
  try {
    const { name_pet, pet_age, pet_gender, pet_type } = req.body;

    await axios.post(HUBSPOT_API, {
      properties: {
        name_pet,
        pet_age,
        pet_gender,
        pet_type
      }
    }, {
      headers: { Authorization: `Bearer ${HUBSPOT_TOKEN}` }
    });

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.send('Error creating contact');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
