function ShoppingListCard({ list, onEdit, onDelete }) {

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

        <div className="d-flex align-items-center gap-2">
          <span className="shopping-badge">
            {list.category}
          </span>

          <div className="dropdown">
            <button
              type="button"
              className="btn btn-light btn-sm"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label={`Opções da lista ${list.name}`}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onEdit(list)}
                  >
                    <i className="bi bi-pencil me-2"></i>
                    Editar
                  </button>
                </li>

                <li>
                  <button 
                    className="dropdown-item text-danger"
                    onClick={() => onDelete(list.id)}
                  >
                      <i className="bi bi-trash me-2"></i>
                      Excluir
                  </button>
                </li>
            </ul>
          </div>
        </div>

      </div>

      <h5>{list.name}</h5>

      <p className="shopping-description">
        {list.description || "Sem descrição"}
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