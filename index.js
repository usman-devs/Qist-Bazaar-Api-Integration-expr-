const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// GET Request to External API
app.get('/api/categories', async (req, res) => {
  try {
    const response = await axios.get('https://backend.qistbazaar.pk/api//products-categories-minimal');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('GET Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// POST Request to External API
app.post('/api/categories', async (req, res) => {
  try {
    const postData = req.body;

    const response = await axios.post('https://backend.qistbazaar.pk/api//products-categories-minimal', postData, {
      headers: {
        'Content-Type': 'application/json'
        // Add Authorization header if needed
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('POST Error:', error.message);
    res.status(500).json({ error: 'Failed to post data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
