const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.post('/get-response', async (req, res) => {
  try {
    const userQuery = req.body.query;
    // Use Payload CMS API URL to fetch responses based on the user query
    const payloadCmsApiUrl = 'https://your-payload-cms-api-url.com';
    const payloadCmsResponse = await axios.get(payloadCmsApiUrl, {
      params: {
        query: userQuery
      }
    });
    const responseText = payloadCmsResponse.data.response;

    res.json({ response: responseText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

// Define an endpoint for your Android app to send queries
app.post('/get-response', async (req, res) => {
  try {
    const userQuery = req.body.query;
    // Use Payload CMS API URL to fetch responses based on the user query
    const response = await axios.get('https://your-payload-cms-api-url.com', {
      params: {
        query: userQuery
      }
    });
    res.json({ response: response.data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
