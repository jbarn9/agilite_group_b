// index.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Je construis le chemin vers index.html
  const filePath = path.join(__dirname, 'index.html');
  
  // Je lis le fichier et l'envoie au client
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Erreur serveur');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});