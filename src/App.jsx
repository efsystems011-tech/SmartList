import { useState, useEffect, use } from "react"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from './pages/Dashboard'
import ListModal from './components/ListModal'

import { initialLists } from "./data/initialLists"

import "./styles/dashboard.css"

 const STORAGE_KEY = "smartlist_lists"

function App() {

  const [activePage, setActivePage] = useState("dashboard")

  const [shoppingLists, setShoppingLists] =useState(() => {
    try {
      const savedLists = localStorage.getItem(STORAGE_KEY);

      if(savedLists !== null) {
        const parsedLists = JSON.parse(savedLists);

        if (Array.isArray(parsedLists)) {
          return parsedLists;
        }
      }
    } catch (error) {
      console.error("Erro ao carregar listas: ", error);
    }

    return initialLists;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingList, setEditingList] = useState(null);

  const pageNames = {
    dashboard: "Dashboard",
    listas: "Minhas Listas",
    historico: "Históricos",
    orcamento: "Orçamento",
    configuracoes: "Configurações"
  };

  // SALVAR AUTOMATICAMENTE
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(shoppingLists)
      );
    } catch (error) {
      console.error("Erro ao salvar listas:", error)
    }
  }, [shoppingLists]);

  // ABRIR FORMULÁRIO DE CADASTRO
  function handleNewList() {
    setEditingList(null);
    setShowModal(true)
  }

  // ABRIR FORMULÁRIO DE EDIÇÃO
  function handleEditList(list) {
    setEditingList(list);
    setShowModal(true);
  }

  // SALVAR LISTA
  function handleSaveList(listData) {
    if (editingList) {

      setShoppingLists((previousLists) =>
        previousLists.map((list) =>
          list.id === editingList.id
            ? { ...list, ...listData }
            : list
        )
      );
    } else {
      const newList = {
        id: crypto.randomUUID(),
        ...listData,
        totalItems: 0,
        completedItems: 0,
        total: 0
      };

      setShoppingLists((previousLists) => [
        ...previousLists,
        newList
      ]);
    }

    setShowModal(false);
    setEditingList(null)
  }

  // EXCLUIR LISTA
  function handleDeleteList(id) {
    const confirmed = window.confirm(
      "Deseja realmente excluir esta lista?"
    );

    if(!confirmed)
      return;

    setShoppingLists((previousList) => previousList.filter((list) => list.id !== id));
  }

  // FECHAR MODAL
  function handleCloseModal() {
    setShowModal(false)
    setEditingList(null)
  }

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

    <main className="main-content">
      <Header />

      {activePage === "dashboard" ||
       activePage === "listas" ? (

        <Dashboard 
          shoppingLists={shoppingLists}
          onNewList={handleNewList}
          onEditList={handleEditList}
          onDeleteList={handleDeleteList}
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

    <ListModal
      isOpen={showModal}
      onClose={handleCloseModal}
      onSave={handleSaveList}
      editingList={editingList}
    />

    </div>
  )
}

export default App