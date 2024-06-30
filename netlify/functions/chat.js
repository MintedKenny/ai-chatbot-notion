const axios = require('axios');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message, model, apiKey } = JSON.parse(event.body);

  if (!apiKey) {
    return { statusCode: 400, body: JSON.stringify({ error: 'API key is required' }) };
  }

  try {
    const response = await axios.post('https://api.anthropic.com/v1/chat/completions', {
      model: model,
      messages: [{ role: "user", content: message }],
      max_tokens: 1000
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.response?.data?.error?.message || 'Failed to communicate with Anthropic API' })
    };
  }
};