const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/dados', (req, res) => {
    try {
        const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
        res.json(dados);
    } catch (e) { res.json({ noticias: [] }); }
});

app.post('/adicionar-noticia', (req, res) => {
    let dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
    dados.noticias.push(req.body);
    fs.writeFileSync('dados.json', JSON.stringify(dados, null, 2));
    res.send('<h1>Publicado com sucesso!</h1><a href="/admin">Voltar ao Painel</a>');
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/contacto.html', (req, res) => res.sendFile(path.join(__dirname, 'contacto.html')));
app.post('/login', (req, res) => {
    if (req.body.password === "Simão123") res.sendFile(path.join(__dirname, 'painel.html'));
    else res.send('Senha incorreta! <a href="/admin">Tentar novamente</a>');
});
app.listen(process.env.PORT || 3000);
