import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allItems="all"
function App() {
  const [menuItems,setMenuItmes]=useState(items)
  const allCatagories=menuItems.reduce((arr, current) => {
    if(!arr.includes(current.category))
      arr.push(current.category)
    return arr
  }, [allItems])
  const [currCat,setCurrCat]=useState(allItems)
  return <main>
    <section className='menu section'>
      <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
      </div>
      <Categories categories={allCatagories} setCat={setCurrCat}/>
      <Menu items={menuItems.filter(item => {
          return currCat==allItems || item.category==currCat
      })} />
    </section>
  </main>;
}

export default App;
