import { useState } from "react"

import Sidebar from "./components/Sidebar"

import "./styles/dashboard.css"
import Header from "./components/Header"
import Dashboard from './pages/Dashboard'

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

      {activePage === "dashboard" ? (

        <Dashboard 
          onNewList={() => setShowModal(true)}
        />
      ) : (
        <div className="dashboard-content">
          <div className="placeholder-page">
            <i className="bi bi-tools"></i>

            <h3>
              {pageNames[activePage]}
            </h3>

            <p>Esta funcionalidade será desenvolvida nas próximas etapas.</p>
          </div>
        </div>
      )
    
    }
    </main>

    {showModal && (
      <div className="modal-overlay">
        <div
          className="custom-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >

          <div className="modal-top">
            <h4 id="modal-title">
              Nova Lista
            </h4>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Fechar"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <p>
              Na próxima etapa, vamos criar
              o formulário para cadastrar listas.
            </p>

            <button
              className="btn-new-list w-100"
              onClick={() => setShowModal(false)}
            >
              Entendi
            </button>

        </div>
      </div>
    )}

    </div>
  )
}

export default App