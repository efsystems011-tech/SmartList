function Header() {
    return (
        <header className="dashboard-header">

            <div>
                <h2 className="header-title">
                    Olá, bem-vindo! 👋
                </h2>

                <p>
                    Organize suas compras de maneira inteligente.
                </p>
            </div>

            <div className="header-actions">

                <button
                    className="notification-btn"
                    type="button"
                    aria-label="Notificações"
                    title="Notificações em breve"
                >
                    <i className="bi bi-bell"></i>
                </button>

                <div className="header-avatar">
                    <i className="bi bi-person-fill"></i>
                </div>
            </div>

        </header>
    )
}

export  default Header