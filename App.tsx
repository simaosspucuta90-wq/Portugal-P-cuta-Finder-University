import React, { useState } from 'react';
import dados from './dados.json'; 

export default function App() {
  const [activeTab, setActiveTab] = useState("explorar");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === "Mrfiladagoda2") {
      setIsAdminLoggedIn(true);
    } else {
      alert("Palavra-passe incorreta.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Cabeçalho Consolidado com o novo Branding */}
      <header className="bg-[#1a365d] text-white p-4 shadow-md">
        <div className="text-xl font-bold mb-2 text-center">Portugal Púcuta Finder University</div>
        <nav className="flex justify-center gap-4 overflow-x-auto text-sm border-t border-blue-800 pt-2">
          <button onClick={() => setActiveTab("explorar")}>Explorar</button>
          <button onClick={() => setActiveTab("chat")}>Consultor IA</button>
          <button onClick={() => setActiveTab("comparar")}>Comparar</button>
          <button onClick={() => setActiveTab("admin")}>Admin</button>
        </nav>
      </header>

      {/* Conteúdo Principal com Leitura de Dados */}
      <main className="flex-1 p-4">
        {activeTab === "explorar" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dados.noticias.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="font-bold text-lg text-slate-800">{item.titulo}</h3>
                <p className="text-sm text-slate-600">Tipo: {item.tipo}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "admin" && !isAdminLoggedIn && (
          <form onSubmit={handleAdminLogin} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <input 
              type="password" 
              placeholder="Palavra-passe" 
              className="border p-2 w-full mb-2"
              onChange={(e) => setAdminPassword(e.target.value)} 
            />
            <button type="submit" className="bg-blue-600 text-white p-2 w-full">Entrar</button>
          </form>
        )}
      </main>

      {/* Rodapé com Branding e Autoria */}
      <footer className="mt-auto bg-slate-800 text-white p-4 text-center text-xs">
        <p>Copyright © 2026 Portugal Púcuta Finder University - Desenvolvido por Simão Sérgio Sungo Púcuta. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  // Função simples para simular o login
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") { // Define aqui a tua senha
      setIsAdmin(true);
    } else {
      alert("Senha incorreta!");
    }
  };

  if (!isAdmin) {
    // Tela de Login (o teu login.html)
    return (
      <div className="login-container">
        <h1>Acesso Restrito</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="Senha de Admin" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit" className="botao">Entrar</button>
        </form>
      </div>
    );
  }

  // Tela do Painel Admin (o teu painel.html)
  return (
    <div className="painel-container">
      <h1>Painel Admin - Portugal Uni Finder</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input name="titulo" placeholder="Nome da Univ" required /><br />
        <input name="tipo" placeholder="Ensino (Pública/Privada)" required /><br />
        <input name="propina" placeholder="Valor Propina (€)" type="number" required /><br />
        <input name="resposta" placeholder="Tempo de Resposta" required /><br />
        <input name="score" placeholder="Acceptance Score (0-100)" type="number" required /><br />
        <button type="submit">Publicar no Site</button>
      </form>
      <hr />
      <h3>Robô Sync (Automação)</h3>
      <button onClick={() => alert('O Robô Sync foi ativado!')} style={{background: 'blue', color: 'white'}}>
        🔍 Iniciar Busca Automática
      </button>
    </div>
  );
}

export default App;
