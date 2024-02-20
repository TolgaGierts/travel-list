import React, { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'


const App = () => {

  const [items, setItems] = useState([])

  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  const handleDelete = (item) => {
    setItems((items) => [...items.filter(i => i.id !== item.id)])
  }

  const handlePacked = (item) => {
    setItems((items) => [...items.map(i => i.id === item.id ? { ...i, packed: !i.packed } : i)])
  }

  const handleClearList = () => {
    if (!window.confirm('Are you sure you want to clear the list?')) return
    setItems([])
  }


  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDelete} onPacked={handlePacked} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}




export default App