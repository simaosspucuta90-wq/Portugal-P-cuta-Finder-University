const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Esta linha abaixo é o segredo: ela diz ao servidor para servir ficheiros estáticos
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor a correr na porta ${port}`);
});
