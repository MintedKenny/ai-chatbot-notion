const axios = require('axios');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message, model } = JSON.parse(event.body);

  console.log('Received request:', { message, model });

  try {
    console.log('Sending request to Anthropic API');
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

    console.log('Received response from Anthropic API');
    return {
      statusCode: 200,
      body: JSON.stringify({ content: response.data.content[0].text })
    };
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ 
        error: 'Failed to communicate with Anthropic API',
        details: error.response ? error.response.data : error.message
      })
    };
  }
};