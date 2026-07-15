const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Rota principal para ler os dados e mostrar no site
app.get('/api/dados', (req, res) => {
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
    res.json(dados);
});

app.post('/adicionar-noticia', (req, res) => {
    const { titulo, descricao } = req.body;
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
    dados.noticias.push({ titulo, descricao });
    fs.writeFileSync('dados.json', JSON.stringify(dados, null, 2));
    res.send('Notícia adicionada com sucesso! <a href="/admin">Voltar</a>');
});

app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.post('/login', (req, res) => {
    if (req.body.password === "Simão123") res.sendFile(path.join(__dirname, 'painel.html'));
    else res.send('Senha incorreta!');
});

app.listen(port, () => console.log(`Servidor a correr na porta ${port}`));
