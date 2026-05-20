const axios = require('axios')

exports.handler = async (event) => {
  const apiKey = process.env.VITE_NEWSAPI_KEY
  const { query = 'occupational medicine' } = JSON.parse(event.body || '{}')

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' })
    }
  }

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        sortBy: 'publishedAt',
        language: 'en',
        apiKey: apiKey
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unable to fetch news' })
    }
  }
}
