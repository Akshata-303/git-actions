// Import the built-in 'fs' module
const fs = require('fs');

// Function to print a message
toConsole();
function toConsole() {
    console.log("Hello, this is a simple Node.js application for CI/CD demonstration!");
}

// Function to write to a file
fs.writeFile('output.txt', 'This is written to a file as part of the CI/CD pipeline!', (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('File has been written successfully!');
    }
});

// Simple HTTP server for Docker container
toHTTPServer();
function toHTTPServer() {
    const http = require('http');
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from Node.js running in Docker!\n');
        res.end('Hello from akshata running in Docker!\n');
    });
    
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
