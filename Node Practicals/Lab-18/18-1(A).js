const http = require('http');

// const port = 3000;

const server = http.createServer((req, res) => {
	res.write('Hello, World!\n');
	
});

server.listen(3000, () => {
	console.log('Server running at port - 3000');
});