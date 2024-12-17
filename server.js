const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Middleware para servir archivos estáticos desde el directorio build
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req, res) => {
    res.send('API funcionando correctamente');
});

// Sirve index.html en todas las rutas que no coincidan con /api
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
