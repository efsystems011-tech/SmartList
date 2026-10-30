function ShoppingListCard({ list }) {

  const progress =
    list.totalItems > 0
      ? (list.completedItems / list.totalItems) * 100
      : 0;

  return (
    <div className="shopping-card">

      <div className="shopping-card-header">

        <div className="shopping-icon">
          <i className={`bi ${list.icon}`}></i>
        </div>

        <span className="shopping-badge">
          {list.category}
        </span>

      </div>

      <h5>{list.name}</h5>

      <p className="shopping-description">
        {list.description}
      </p>

      <div className="shopping-progress-info">

        <span>
          {list.completedItems} de {list.totalItems} itens
        </span>

        <span>{Math.round(progress)}%</span>

      </div>

      <div className="progress shopping-progress">

        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>

      </div>

      <div className="shopping-card-footer">

        <strong>
          {list.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </strong>

        <button
          className="btn-open-list"
          type="button"
          disabled
          title="Disponível na próxima etapa"
        >
          Abrir lista
          <i className="bi bi-arrow-right"></i>
        </button>

      </div>

    </div>
  );
}

export default ShoppingListCard;