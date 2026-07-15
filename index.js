<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Contacto - Portugal Finder</title>
</head>
<body>
    <h1>Entre em contacto connosco</h1>
    <p>Envie-nos um e-mail para: suporte@portugalfinder.com</p>
    <a href="/">Voltar para a página inicial</a>
</body>
</html>

// Adicione esta parte abaixo da linha que já existe
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'contacto.<a href="/contacto">Ir para a página de contacto</a>
