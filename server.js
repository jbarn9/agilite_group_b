const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Déterminer le fichier demandé
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './src/index.html';
    } else if (!filePath.startsWith('./src/')) {
        filePath = './src' + req.url;
    }

    // Types MIME
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Lire et envoyer le fichier
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 - Fichier non trouvé');
            } else {
                res.writeHead(500);
                res.end('Erreur serveur');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});