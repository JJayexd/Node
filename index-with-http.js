import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hej Chef');
    console.log('Server responded with "Hej Chef"');
}).listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});

console.log('Test');