//production config settings
export default {
  API_ENDPOINT: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
  TOKEN_KEY: process.env.REACT_APP_API_KEY
  //  **USE THIS TOKEN KEY FOR CYPRESS TESTS**
  //   TOKEN_KEY: 'blogful-client-auth-token'

}


