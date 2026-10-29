function StatCard({ title, value, icon, color}) {
    return (
        <div className="stat-card">
            <div className="stat-info">
                <p>{title}</p>

                <h3>{value}</h3>
            </div>

            <div className={`stat-icon ${color}`}>
                <i className={`bi ${icon}`}></i>
            </div>
        </div>
    )
}

export default StatCard;