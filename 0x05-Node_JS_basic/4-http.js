const {createServer} = require('node:http');

const port = 1245;

const app = createServer((req, res) => {
    res.writeHead(200, 'Content-type', 'text/plain')
    res.write("Hello Holberton School!")
});

app.listen(port, () => console.log(`https://localhost:${port}`))

module.exports = app;
