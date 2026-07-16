const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Rota para o site ler os dados
app.get('/api/dados', (req, res) => {
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
    res.json(dados);
});

// Rota para publicar nova notícia
app.post('/adicionar-noticia', (req, res) => {
    const { titulo, descricao } = req.body;
    let dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
    dados.noticias.push({ titulo, descricao });
    fs.writeFileSync('dados.json', JSON.stringify(dados, null, 2));
    res.send('Notícia publicada com sucesso! <a href="/admin">Voltar para o Painel</a>');
});

// Rotas de Acesso
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.post('/login', (req, res) => {
    if (req.body.password === "Simão123") res.sendFile(path.join(__dirname, 'painel.html'));
    else res.send('Senha incorreta! <a href="/admin">Tentar novamente</a>');
});

app.listen(port, () => console.log(`Servidor a correr na porta ${port}`));
