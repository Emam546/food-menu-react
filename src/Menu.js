import React from 'react';
const MenuItem=({item})=>{
  const {title,price,img,desc}=item
  return <article className='menu-item'>
      <img src={img} alt={title} className="photo" />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>{price}</h4>
        </header>
        <div className="item-text">{desc}</div>
      </div>
  </article>
}
const Menu = ({items}) => {
  return <div className='section-center'>
    {items.map((item)=>{
      return <MenuItem key={item.id} item={item}/>
    })}
  </div>;
};

export default Menu;
