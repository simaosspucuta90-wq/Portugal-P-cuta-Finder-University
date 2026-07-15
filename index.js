const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'contacto.html'));
});

app.get('/universidades', (req, res) => {
    res.sendFile(path.join(__dirname, 'universidades.html'));
});

app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'formulario.html'));
});

app.post('/enviar-formulario', (req, res) => {
    console.log(req.body);
    res.send('<h1>Formulário recebido!</h1><a href="/">Voltar</a>');
});

app.listen(port, () => {
    console.log(`Servidor a correr na porta ${port}`);
});
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === "Simão123") { // Podes mudar a senha aqui
        res.send('<h1>Bem-vindo, Admin!</h1><a href="/editar-conteudo">Editar Notícias</a>');
    } else {
        res.send('<h1>Senha incorreta!</h1><a href="/admin">Tentar novamente</a>');
    }
});
