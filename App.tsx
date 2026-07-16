import React, { useState } from 'react';
// Importa o teu ficheiro de dados para ser lido pelo App
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

      {/* Conteúdo Principal Dinâmico */}
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

      {/* Rodapé com a tua autoria e novo Branding */}
      <footer className="mt-auto bg-slate-800 text-white p-4 text-center text-xs">
        <p>Copyright © 2026 Portugal Púcuta Finder University - Desenvolvido por Simão Sérgio Sungo Púcuta. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
