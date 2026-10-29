import { useState } from "react"

import Sidebar from "./components/Sidebar"

import "./styles/dashboard.css"
import Header from "./components/Header"

function App() {

  const [activePage, setActivePage] = useState("dashboard")

  const [showModal, setShowModal] = useState(false)

  const pageNames = {
    dashboard: "Dashboard",
    listas: "Minhas Listas",
    historico: "Históricos",
    orcamento: "Orçamento",
    configuracoes: "Configurações"
  };

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

    <main>
      <Header />
    </main>

    </div>
  )
}

export default App