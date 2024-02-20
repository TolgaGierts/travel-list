import { useState } from 'react'

const PackingList = ({ items, onDeleteItem, onPacked, onClearList }) => {
    const [sortBy, setSortBy] = useState('input')

    let sortedItems;

    if (sortBy === 'input') sortedItems = items
    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))


    return (
        <div className='list'>
            <ul>
                {sortedItems.map(item => (
                    <Item item={item} onDeleteItem={onDeleteItem} onPacked={onPacked} key={item.id} />
                ))}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input" key="">Sort by the input order</option>
                    <option value="description" key="">Sort by description</option>
                    <option value="packed" key="">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>

        </div>
    )
}

const Item = ({ item, onDeleteItem, onPacked }) => {
    return (
        <li>
            <input type="checkbox" checked={item.packed} onChange={() => onPacked(item)} />
            <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>{item.quantity} {item.description}</span>
            <button onClick={() => onDeleteItem(item)}>❌</button>
        </li>
    )
}

export default PackingList