function ShoppingListCard({ list }) {
    const progress = list.totalItems > 0
        ? (list.completedItems / list.totalItems) * 100
        : 0;

    return (
        <div className="shopping-card">

        </div>
    )
}

export default ShoppingListCard