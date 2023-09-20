const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Acceder a la variable de entorno NODE_ENV
    const nodeEnv = process.env.NODE_ENV || 'Default Value';

    // Crear una página HTML simple con el mensaje
    const htmlResponse = `
        <html>
        <head>
            <title>Node.js App</title>
        </head>
        <body>
            <h1>Hola desde: ${nodeEnv}</h1>
        </body>
        </html>
    `;

    res.end(htmlResponse);
});

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
