import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  // Estado de Autenticação e Branding
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [activeTab, setActiveTab] = useState("explorar");

  // Lógica de Login Admin
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === "Mrfiladagoda2") {
      setIsAdminLoggedIn(true);
      setAdminError("");
    } else {
      setAdminError("Palavra-passe administrativa incorreta.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* CABEÇALHO ATUALIZADO (Duas Linhas) */}
      <header className="bg-[#1a365d] text-white p-4 shadow-md">
        <div className="text-xl font-bold mb-2 text-center">Portugal Púcuta Finder University</div>
        <nav className="flex justify-center gap-4 overflow-x-auto pb-1 text-sm border-t border-blue-800 pt-2">
          <button onClick={() => setActiveTab("explorar")}>Explorar</button>
          <button onClick={() => setActiveTab("chat")}>Consultor IA</button>
          <button onClick={() => setActiveTab("comparar")}>Comparar</button>
          <button onClick={() => setActiveTab("admin")}>Admin</button>
        </nav>
      </header>

      {/* ÁREA DE CONTEÚDO (Expansível para preencher espaço) */}
      <main className="flex-1 p-4">
        {/* Aqui entrará o teu conteúdo renderizado dinamicamente */}
        
        {/* Exemplo de secção ADMIN mantendo a lógica de segurança */}
        {activeTab === "admin" && (
            !isAdminLoggedIn ? (
                <form onSubmit={handleAdminLogin} className="max-w-md mx-auto bg-white p-6 rounded shadow">
                    <input type="password" placeholder="Palavra-passe" onChange={e => setAdminPassword(e.target.value)} />
                    <button type="submit">Entrar</button>
                    {adminError && <p className="text-red-500">{adminError}</p>}
                </form>
            ) : (
                <div className="p-4 bg-white rounded shadow">
                    <h2>Painel Administrativo - Portugal Púcuta Finder University</h2>
                    {/* Teu código CRUD aqui */}
                </div>
            )
        )}
      </main>

      {/* RODAPÉ COM BRANDING ATUALIZADO */}
      <footer className="mt-auto bg-slate-800 text-white p-4 text-center text-xs">
        <p>Copyright © 2026 Portugal Púcuta Finder University - Desenvolvido por Simão Sérgio Sungo Púcuta. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
