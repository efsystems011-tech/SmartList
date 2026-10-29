import StatCard from "../components/StatCard";
import ShoppingListCard from "../components/ShoppingListCard";

function Dashboard({ onNewList }) {

    const shoppingList = [
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
        }
    ];

    const totalLists = shoppingList.length;

    const totalProducts = shoppingList.reduce(
        (total, list) => total + list.totalItems,
        0
    );

    const totalSpent = shoppingList.reduce(
        (total, list) => total + list.total,
        0
    );

    return (
        <div className="dashboard-content">
            <div className="dashboard-welcome">
                <div>
                    <h3>Visão Geral</h3>

                    <p>Acompanhe suas lisatas e organize suas compras.</p>
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

                <span className="row g-4">
                    {totalLists} listas
                </span>
            </div>

            <div className="row g-4">
                {shoppingList.map((list) => (
                    <div 
                        className="col-md-6 col-xl-4"
                        key={list.id}
                    >
                        <shoppingList list={list} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard