const http = require('http');
const express = require('express');
const ip = require('ip');

// Delay in milliseconds (30 seconds)
const delay = 30000;

// Create an Express application
const app = express();

// Define a simple GET API endpoint
app.get('/api', (req, res) => {
  // Get the client's IP address
  const clientIp = ip.address();

  // Set the response content type
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Send the response with the client's IP address
  res.end(JSON.stringify({ message: `Hello Image 2 from API: ${clientIp}` }));
});

// Create an HTTP server
const server = http.createServer(app);

// Start the server after the specified delay
setTimeout(() => {
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}, delay);
