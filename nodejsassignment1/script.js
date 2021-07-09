const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<title>Nodejs Assignment 1</title>');
        res.write('<body><h1>Nodejs Home Page</h1></body>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="new_user"><button type="submit">Send</button></form>');
        res.write('</html>');
       return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<title>Users List</title>');
        res.write('<ul>');
        res.write('<li>User One</li>');
        res.write('<li>User Two</li>');
        res.write('<li>User Three</li>');
        res.write('</ul></html>');
        return res.end();
    }

    if (url === '/create-user' ) {
        const body = [];
        req.on('data', chunk => {
            
            body.push(chunk);
            console.log(body);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
        
        res.end();
    }

    
});

server.listen(3001);