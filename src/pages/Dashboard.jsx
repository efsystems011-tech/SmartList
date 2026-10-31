import { useState } from "react";

import StatCard from "../components/StatCard";
import ShoppingListCard from "../components/ShoppingListCard";

function Dashboard({ 
  shoppingLists,
  onNewList,
  onEditList,
  onDeleteList
 }) {


  const [search, setSearch] = useState("");

  const totalLists = shoppingLists.length;

  const totalProducts = shoppingLists.reduce(
    (total, list) => total + list.totalItems,
    0
  );

  const totalSpent = shoppingLists.reduce(
    (total, list) => total + list.total,
    0
  );

  const filteredLists = shoppingLists.filter((list) =>
    list.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-content">

      <div className="dashboard-welcome">

        <div>
          <h3>Visão Geral</h3>

          <p>
            Organize suas compras de maneira inteligente.
          </p>
        </div>

        <button
          className="btn-new-list"
          onClick={onNewList}
        >
          <i className="bi bi-plus-lg"></i>
          Nova Lista
        </button>

      </div>

      <div className="row g-4 mb-4">

        <div className="col-md-4">

          <StatCard
            title="Total de Listas"
            value={totalLists}
            icon="bi-cart3"
            color="green"
          />

        </div>

        <div className="col-md-4">

          <StatCard
            title="Total de Produtos"
            value={totalProducts}
            icon="bi-box-seam"
            color="blue"
          />

        </div>

        <div className="col-md-4">

          <StatCard
            title="Valor das Listas"
            value={totalSpent.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
            icon="bi-wallet2"
            color="orange"
          />

        </div>

      </div>

      <div className="section-header">

        <div>
          <h4>Minhas Listas</h4>

          <p>Gerencie suas listas de compras</p>
        </div>

        <span className="list-count">
          {totalLists} listas
        </span>

      </div>

      <div className="mb-4">

        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search"></i>
          </span>

          <input 
            type="search"
            className="form-control border-start-0"
            placeholder="Pesquisar listas..."
            aria-label="Pesquisar listas"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      {filteredLists.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-basket"></i>

          <h4>Nenhuma lista encontrada</h4>

          <p>Crie uma nova lista ou altere sua pesquisa.</p>

        </div>
      ) : (

        <div className="row g-4">
            {filteredLists.map((list) => (
              <div
                className="col-md-6 col-xl-4"
                key={list.id}
              >
                <ShoppingListCard
                  list={list}
                  onEdit={onEditList}
                  onDelete={onDeleteList}
                />
              </div>
            ))}
        </div>
      )}

    </div>
  );
}

export default Dashboard;