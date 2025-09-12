const http = require('http');
const { spawn } = require('child_process');

console.log('Starting server test...');

// Start the server
const server = spawn('node', ['index.js'], { 
  stdio: ['inherit', 'pipe', 'pipe'],
  detached: false
});

let serverOutput = '';
server.stdout.on('data', (data) => {
  const output = data.toString();
  console.log('SERVER:', output);
  serverOutput += output;
  
  // Wait for server to be ready
  if (output.includes('MediVolt API Server is running')) {
    setTimeout(() => {
      // Test the health endpoint
      const req = http.request({
        hostname: 'localhost',
        port: 3001,
        path: '/api/health',
        method: 'GET',
        timeout: 5000
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          console.log('✅ Server is accessible!');
          console.log('Status:', res.statusCode);
          console.log('Response:', data);
          server.kill();
          process.exit(0);
        });
      });
      
      req.on('error', (err) => {
        console.log('❌ Server connection failed:', err.message);
        server.kill();
        process.exit(1);
      });
      
      req.on('timeout', () => {
        console.log('❌ Server connection timed out');
        req.destroy();
        server.kill();
        process.exit(1);
      });
      
      req.end();
    }, 1000);
  }
});

server.stderr.on('data', (data) => {
  console.log('SERVER ERROR:', data.toString());
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Cleanup after 10 seconds
setTimeout(() => {
  console.log('Test timeout reached, killing server...');
  server.kill();
  process.exit(1);
}, 10000);
