import StatCard from "../components/StatCard";
import ShoppingListCard from "../components/ShoppingListCard";

function Dashboard({ onNewList }) {

  const shoppingLists = [
    {
      id: 1,
      name: "Compras do Supermercado",
      description: "Compras do mês",
      category: "Mercado",
      icon: "bi-basket2",
      totalItems: 20,
      completedItems: 15,
      total: 350.90
    },
    {
      id: 2,
      name: "Farmácia",
      description: "Medicamentos e higiene",
      category: "Saúde",
      icon: "bi-heart-pulse",
      totalItems: 8,
      completedItems: 3,
      total: 120.50
    },
    {
      id: 3,
      name: "Churrasco",
      description: "Compras para o final de semana",
      category: "Eventos",
      icon: "bi-fire",
      totalItems: 12,
      completedItems: 6,
      total: 280.00
    }
  ];

  const totalLists = shoppingLists.length;

  const totalProducts = shoppingLists.reduce(
    (total, list) => total + list.totalItems,
    0
  );

  const totalSpent = shoppingLists.reduce(
    (total, list) => total + list.total,
    0
  );

  return (
    <div className="dashboard-content">

      <div className="dashboard-welcome">

        <div>
          <h3>Visão Geral</h3>

          <p>
            Acompanhe suas listas e organize suas compras.
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

          <p>Gerencie suas compras recentes</p>
        </div>

        <span className="list-count">
          {totalLists} listas
        </span>

      </div>

      <div className="row g-4">

        {shoppingLists.map((list) => (

          <div
            className="col-md-6 col-xl-4"
            key={list.id}
          >

            <ShoppingListCard list={list} />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;