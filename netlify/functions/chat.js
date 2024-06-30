const axios = require('axios');

// Store this securely in your Netlify environment variables
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message, model } = JSON.parse(event.body);

  try {
    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: model,
      messages: [{ role: "user", content: message }],
      max_tokens: 1000
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.response?.data?.error?.message || 'Failed to communicate with Anthropic API' })
    };
  }
};