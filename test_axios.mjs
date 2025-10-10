import axios from 'axios';

const token = "23769~HPQna7V2Ce2f8QxGyUWJMZGvx8FCc8Xf8yW2HVHtnmvmyL4JZaxA93hPM2VuextX";
const domain = "roselleschools.instructure.com";
const baseURL = `https://${domain}/api/v1`;

console.log('Creating axios client with token:', token.substring(0, 10) + '...' + token.substring(token.length - 5));

const client = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  timeout: 30000
});

// Add request interceptor
client.interceptors.request.use(
  (config) => {
    console.log('\n=== REQUEST DEBUG ===');
    console.log('Full URL:', config.baseURL + config.url);
    console.log('Method:', config.method);
    const authHeader = config.headers['Authorization'] || config.headers['authorization'];
    console.log('Auth Header:', authHeader.substring(0, 17) + '...' + authHeader.substring(authHeader.length - 5));
    console.log('====================\n');
    return config;
  }
);

// Test the request
try {
  const response = await client.get('/users/self/profile');
  console.log('✓ SUCCESS:', response.status, response.statusText);
  console.log('✓ User:', response.data.name);
} catch (error) {
  console.error('✗ ERROR:', error.response?.status, error.response?.statusText);
  console.error('✗ Error message:', error.response?.data?.message || error.message);
}
