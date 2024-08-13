const http = require('node:http');
const fs = require('node:fs/promises');

// Create a local server to receive data from
const server = http.createServer((req, res) =>
{
    whatToSend(req, res)
});

server.listen(8080);

async function whatToSend(req, res)
{
    let contentToSend;
    let filepath = '/home/odinstudent/OdinProject/Node/Odin_Basic_Informational_Site/'
    if (req.url === '/' || req.url === '/index')
    {
        contentToSend = await fs.readFile(`${filepath}index.html`, { encoding: 'utf-8' })
    }
    else if (req.url === '/about')
    {
        contentToSend = await fs.readFile(`${filepath}about.html`, { encoding: 'utf-8' })
    }
    else if (req.url === '/contact_me')
    {
        contentToSend = await fs.readFile(`${filepath}contact_me.html`, { encoding: 'utf-8' })
    }
    else
    {
        contentToSend = await fs.readFile(`${filepath}404.html`, { encoding: 'utf-8' })
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(contentToSend)
    res.end();
}