function Sidebar({ activePage, onNavigate }) {

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: "bi-grid-1x2-fill"
    },
    {
      id: "listas",
      name: "Minhas Listas",
      icon: "bi-cart3"
    },
    {
      id: "historico",
      name: "Histórico",
      icon: "bi-clock-history"
    },
    {
      id: "orcamento",
      name: "Orçamento",
      icon: "bi-wallet2"
    },
    {
      id: "configuracoes",
      name: "Configurações",
      icon: "bi-gear"
    }
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <i className="bi bi-basket2-fill"></i>
        <span>SmartList</span>
      </div>

      <div className="sidebar-menu">

        <p className="menu-label">MENU PRINCIPAL</p>

        {menuItems.map((item) => (

          <button
            key={item.id}
            type="button"
            className={`menu-item ${
              activePage === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >

            <i className={`bi ${item.icon}`}></i>

            <span>{item.name}</span>

          </button>

        ))}

      </div>

      <div className="sidebar-footer">

        <div className="user-avatar">
          <i className="bi bi-person-fill"></i>
        </div>

        <div>
          <strong>Meu Perfil</strong>
          <small>Usuário SmartList</small>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;